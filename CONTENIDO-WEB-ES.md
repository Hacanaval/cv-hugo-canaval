# Contenido web aprobado en español

**Proyecto:** cv-hugo-canaval
**Última actualización:** 2026-08-26
**Estado:** Contenido aprobado e implementado en el candidato local

Fuente canónica del contenido público en español. La experiencia se presenta mediante proyectos privados sanitizados. No incluye empleadores, fechas laborales, nombres internos ni detalles confidenciales.

## Navegación

- Inicio
- Sobre mí
- Habilidades
- Proyectos
- Formación
- Qué busco
- Contacto

## Inicio

**Título**

Product Management · Data Science · AI Builder

**Texto**

Hola, soy Hugo Canaval.

Trabajo en producto, datos e inteligencia artificial. He construido sistemas que ya se usan en procesos operativos de alto volumen. Uno predice el riesgo de una entrega antes del despacho y analiza más de 200.000 casos al día. Otro automatiza cerca de 3.000 conciliaciones diarias. También he desarrollado agentes con IA, herramientas para validar imágenes, APIs y automatizaciones desplegadas en GCP.

Me gusta entender el proceso antes de definir qué construir. Hablo con las personas que lo conocen, reviso los datos disponibles y busco una primera versión que pueda ponerse a prueba. Después me mantengo cerca de la ejecución técnica hasta que la solución se puede usar y medir.

**Mensajes destacados**

- Producto desde el problema hasta la validación.
- Datos e IA aplicados a procesos reales.
- Sistemas desplegados en GCP.

**Botones**

- Ver proyectos
- Descargar CV
- Contactar

## Sobre mí

Me gusta trabajar en problemas donde hay que entender la operación y la tecnología. Antes de pensar en un modelo o una herramienta, busco saber quién toma la decisión, qué información tiene y dónde se está perdiendo tiempo o calidad.

Soy economista, tengo un posgrado en Analítica de Datos y me formé en Data Science. Esa base me ha servido para construir modelos predictivos, agentes con IA, APIs y automatizaciones. Suelo participar desde las primeras conversaciones hasta la validación de una versión que ya puede usarse.

Una solución empieza a parecerme un producto cuando tiene usuarios, reglas, métricas y excepciones. Por eso me interesa seguir cerca después del despliegue, ver qué falló y decidir qué vale la pena cambiar.

## Lo que me diferencia

### Empiezo por el problema

Hablo con las personas que conocen el proceso y reviso cómo toman decisiones antes de proponer una solución.

### Convierto ideas en algo que se puede probar

Defino una primera versión, una métrica y las condiciones necesarias para probarla con usuarios y datos reales.

### Me mantengo cerca de la ejecución técnica

Puedo discutir un modelo, una API o un pipeline y entender cómo cada decisión afecta el producto.

### Elijo la herramienta según el caso

He resuelto problemas con modelos, LLM y reglas deterministas. La elección depende de la variabilidad del proceso, el riesgo y el costo de equivocarse.

### Pienso en lo que ocurre después del despliegue

Tengo en cuenta horarios, permisos, excepciones y seguimiento. Después del despliegue reviso errores, casos límite, uso y cambios en el proceso.

### Mido lo que cambió

Uso fallos evitados, tiempo ahorrado, adopción o capacidad liberada. La métrica tiene que responder a la decisión que originó el proyecto.

## Habilidades y herramientas

### Producto

**Descubrimiento de producto**

Conversaciones con usuarios, observación del proceso y revisión de datos para entender qué decisión necesita apoyo.

**Definición de problemas**

Convierto una necesidad amplia en una pregunta concreta, una hipótesis y una condición de éxito.

**MVP y priorización**

Defino qué debe entrar en la primera versión y qué puede esperar. Comparo impacto, esfuerzo, dependencias y riesgo.

**Requerimientos y criterios de aceptación**

Documento reglas, flujos, excepciones y condiciones de prueba antes de implementar.

**Métricas de producto**

Elijo métricas que muestran si el producto cambió una decisión, redujo errores o liberó capacidad.

**Trabajo con usuarios y perfiles técnicos**

Aclaro con cada parte el problema, las restricciones y qué significa que una solución esté lista.

**Experimentación e iteración**

Pruebo con datos y usuarios reales, reviso fallas y ajusto a partir de la evidencia.

**Documentación y continuidad**

Dejo registradas las decisiones, la arquitectura, la operación y los pendientes para que el sistema pueda mantenerse.

### Capacidades técnicas

**Datos y SQL**

BigQuery, SQL, Python y Pandas para consultar, preparar y conectar datos con productos.

**Machine Learning aplicado**

Modelos supervisados, feature engineering, validación temporal, calibración y matrices de costo.

**IA generativa**

Gemini para texto e imagen, extracción estructurada, clasificación y prompts versionados.

**Agentes**

Function calling, sesiones persistentes, bots conversacionales y orquestación de tareas con IA.

**Cloud y despliegue**

Cloud Run Services y Jobs, Workflows, Scheduler, Cloud Storage y Secret Manager.

**APIs e integraciones**

FastAPI, JWT, Firestore, webhooks, Google Sheets, Telegram y conexiones con sistemas internos.

**Operación de sistemas**

Idempotencia, permisos, auditoría, manejo de excepciones, logging y seguimiento de ejecuciones.

**Desarrollo asistido por IA**

Trabajo con agentes a partir de especificaciones y criterios de validación. Configuro y manejo el agent harness mediante instrucciones, skills, herramientas, contexto y controles.

## Productos y sistemas

Estos cuatro casos resumen el tipo de productos que he construido. Comparto lo suficiente para entender el problema y el resultado, sin exponer información privada.

### Predicción de riesgo de entrega

Desarrollé un sistema de machine learning que estima el riesgo de una entrega antes del despacho. La predicción se traduce en cuatro acciones operativas según el nivel de riesgo.

**Resultados**

- Entrenamiento con más de 100 millones de registros históricos.
- Entre 210.000 y 220.000 casos analizados al día.
- Cerca de 15% menos entregas fallidas.

**Tecnologías:** Python, Scikit-learn, BigQuery, Cloud Run y Optuna.

### Gestión de tareas con IA

Construí un producto para asignar y seguir tareas desde Telegram y una aplicación web. El bot usa function calling, mientras que los permisos se controlan desde el código.

**Resultados**

- Catálogo de 268 usuarios.
- Diez herramientas disponibles mediante function calling.
- Tareas sincronizadas en tiempo real entre el bot y la web.

**Tecnologías:** Gemini, Firestore, FastAPI, Next.js y Cloud Run.

### Conciliación operativa de depósitos

Automaticé el procesamiento de extractos bancarios mediante reglas específicas para cada formato. El sistema elimina duplicados, valida la información y prepara la carga al proceso operativo.

Las reglas son deterministas. En este caso importaban más la trazabilidad y el control de excepciones que usar un modelo de IA.

**Resultados**

- Cerca de 3.000 conciliaciones procesadas al día.
- El volumen equivale a unas 13 jornadas manuales de ocho horas cada día.
- Ejecuciones programadas con manejo separado de excepciones.

**Tecnologías:** Python, BigQuery, Cloud Run Jobs y Google Sheets.

### Validación de evidencia fotográfica

Desarrollé un sistema con Gemini Vision para revisar imágenes de evidencia. Clasifica la imagen y explica el motivo cuando encuentra un problema. Los desacuerdos quedan disponibles para revisión humana.

**Resultados**

- Miles de imágenes procesadas al día.
- 96,77% de recall en una validación offline de 301 casos.
- Prompt versionado y trazabilidad de las decisiones.

**Tecnologías:** Gemini Vision, BigQuery, Python y Cloud Run Jobs.

### Proyectos personales en GitHub

En mi GitHub comparto proyectos personales de ciencia de datos, machine learning y desarrollo de aplicaciones.

**Botón:** Ver todos los proyectos

## Formación

### Programa de Data Science

TripleTen, 2024 a 2025. Formación en Python, SQL, estadística, machine learning y desarrollo de proyectos aplicados.

### Posgrado en Analítica de Datos Aplicada a los Negocios

Universidad Icesi, 2020 a 2021.

### Economía y Negocios Internacionales

Universidad Icesi, 2012 a 2018.

## Cursos y certificaciones

### Product Management

Coderhouse. Gestión de productos digitales, metodologías ágiles, design thinking y estrategia de producto.

### Python para Ciencia de Datos

Platzi. Python para análisis y visualización de datos con NumPy, Pandas y Matplotlib.

### Estadística Inferencial para Data Science e IA

Platzi. Muestreo, intervalos de confianza y pruebas de hipótesis con Python.

### Intro to Machine Learning

Kaggle. Modelos supervisados, validación y evaluación de rendimiento.

### Fundamentos de Spark para Big Data

Platzi. Fundamentos de Apache Spark, PySpark y procesamiento de datos.

## Qué busco ahora

Quiero seguir construyendo productos de datos e inteligencia artificial que lleguen a usuarios reales. Me interesa participar en las decisiones de producto y mantenerme cerca de la implementación.

Me interesa trabajar con equipos distribuidos en distintos países y con proyectos de mayor alcance. Quiero tener espacio para tomar decisiones y conocer otras formas de construir. Los sistemas que todavía no conozco también me atraen. Buena parte de lo que sé lo aprendí resolviendo problemas reales.

## Contacto

Me interesa conversar con equipos que estén construyendo productos de datos o inteligencia artificial y necesiten llevar una idea hasta una versión que pueda ponerse a prueba.

**Botones:** Hablemos, LinkedIn, GitHub, correo y Descargar CV.

## Pie de página

Product Management · Data Science · AI Builder
