import React, { useEffect, useId, useRef, useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import { contactLinks } from "@/utils/contact";

type ContactPlatform = "linkedin" | "github" | "email" | "whatsapp";

interface ContactOrbitProps {
  emphasis?: "ghost" | "signal";
  fullWidth?: boolean;
  label?: string;
}

const ContactOrbit: React.FC<ContactOrbitProps> = ({ emphasis = "ghost", fullWidth = false, label }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<ContactPlatform | null>(null);
  const [previewPlatform, setPreviewPlatform] = useState<ContactPlatform | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const showTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);
  const filterId = useId();
  const buttonLabel = label ?? t.ctaContact;

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setPreviewPlatform(null);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setPreviewPlatform(null);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
      if (showTimerRef.current !== null) window.clearTimeout(showTimerRef.current);
      if (hideTimerRef.current !== null) window.clearTimeout(hideTimerRef.current);
    };
  }, []);

  const clearPreviewTimers = () => {
    if (showTimerRef.current !== null) window.clearTimeout(showTimerRef.current);
    if (hideTimerRef.current !== null) window.clearTimeout(hideTimerRef.current);
    showTimerRef.current = null;
    hideTimerRef.current = null;
  };

  const beginPreview = (platform: ContactPlatform) => {
    clearPreviewTimers();
    setPreviewPlatform(null);
    showTimerRef.current = window.setTimeout(() => {
      setPreviewPlatform(platform);
      showTimerRef.current = null;
    }, 700);
  };

  const endPreview = () => {
    if (showTimerRef.current !== null) window.clearTimeout(showTimerRef.current);
    showTimerRef.current = null;
    hideTimerRef.current = window.setTimeout(() => {
      setPreviewPlatform(null);
      hideTimerRef.current = null;
    }, 100);
  };

  const keepPreview = () => {
    if (hideTimerRef.current !== null) window.clearTimeout(hideTimerRef.current);
    hideTimerRef.current = null;
  };

  const copyValue = async (value: string, platform: ContactPlatform) => {
    await navigator.clipboard.writeText(value);
    setCopied(platform);
    toast({ title: t.linkCopied, description: value, duration: 2000 });
    window.setTimeout(() => setCopied(null), 2000);
  };

  const actions = [
    {
      platform: "linkedin" as const,
      label: t.viewLinkedIn,
      value: contactLinks.linkedin,
      href: contactLinks.linkedin,
      Icon: Linkedin,
      positionClass: "contact-orbit-position-1",
    },
    {
      platform: "github" as const,
      label: t.viewGitHub,
      value: contactLinks.github,
      href: contactLinks.github,
      Icon: Github,
      positionClass: "contact-orbit-position-2",
    },
    {
      platform: "email" as const,
      label: t.contactMe,
      value: contactLinks.email,
      href: `mailto:${contactLinks.email}`,
      Icon: Mail,
      positionClass: "contact-orbit-position-3",
    },
    {
      platform: "whatsapp" as const,
      label: "WhatsApp",
      value: contactLinks.whatsapp,
      href: contactLinks.whatsappUrl,
      Icon: MessageCircle,
      positionClass: "contact-orbit-position-4",
    },
  ];
  const previewAction = actions.find(({ platform }) => platform === previewPlatform);

  return (
    <div ref={rootRef} className={`contact-orbit ${open ? "is-open" : ""} ${fullWidth ? "contact-orbit--full" : ""}`}>
      <svg aria-hidden="true" className="absolute h-0 w-0">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div aria-hidden="true" className="contact-orbit-goo" style={{ filter: `url(#${filterId})` }}>
        {actions.map(({ platform, positionClass }) => (
          <span key={platform} className={`contact-orbit-blob ${positionClass}`} />
        ))}
      </div>

      <div className="contact-orbit-actions" aria-hidden={!open}>
        {actions.map(({ platform, label: actionLabel, href, Icon, positionClass }) => (
          <a
            key={platform}
            href={href}
            target={platform === "email" ? undefined : "_blank"}
            rel={platform === "email" ? undefined : "noreferrer"}
            tabIndex={open ? 0 : -1}
            aria-label={actionLabel}
            className={`contact-orbit-action ${positionClass}`}
            onMouseEnter={() => beginPreview(platform)}
            onMouseLeave={endPreview}
            onFocus={() => {
              clearPreviewTimers();
              setPreviewPlatform(platform);
            }}
            onBlur={endPreview}
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      {previewAction && (
        <div
          role="tooltip"
          className="contact-orbit-copy-panel"
          onMouseEnter={keepPreview}
          onMouseLeave={endPreview}
        >
          <span className="truncate font-mono text-[11px]">{previewAction.value}</span>
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="h-7 w-7 shrink-0"
            aria-label={`${language === "es" ? "Copiar" : "Copy"}: ${previewAction.value}`}
            onClick={() => void copyValue(previewAction.value, previewAction.platform)}
          >
            {copied === previewAction.platform ? <Check size={13} /> : <Copy size={13} />}
          </Button>
        </div>
      )}

      <Button
        type="button"
        variant="ghost"
        size="lg"
        aria-expanded={open}
        aria-label={open ? `${buttonLabel}: ${language === "es" ? "cerrar" : "close"}` : buttonLabel}
        onClick={() => {
          setOpen((current) => !current);
          setPreviewPlatform(null);
          clearPreviewTimers();
        }}
        className={`focus-ring relative z-20 min-h-[52px] w-full rounded-none px-6 ${fullWidth ? "" : "sm:w-auto"} ${emphasis === "signal" ? "bg-[var(--signal)] text-[var(--ink)] hover:bg-white hover:text-[var(--ink)]" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
      >
        {open ? <X className="mr-2 h-5 w-5" /> : <Mail className="mr-2 h-5 w-5" />}
        {buttonLabel}
      </Button>
    </div>
  );
};

export default ContactOrbit;
