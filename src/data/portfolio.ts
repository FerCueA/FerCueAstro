export interface Project {
	title: string;
	category: string;
	description: string;
	outcome: string;
	stack: string[];
	status: string;
	liveUrl?: string;
	repoUrl: string;
}

export interface Certificate {
	title: string;
	category: 'Frontend' | 'JavaScript' | 'Java y Spring' | 'Bases de datos' | 'Herramientas' | 'Recomendaciones';
	issuer?: string;
	href: string;
}

export interface ContactLink {
	label: string;
	value: string;
	href: string;
}

export interface Service {
	title: string;
	description: string;
	icon: 'monitor' | 'server' | 'brand' | 'custom';
	cta: string;
	inquiry: string;
	featured?: boolean;
}

export interface SkillGroup {
	title: string;
	icon: 'code' | 'server' | 'bolt' | 'bot' | 'clipboard' | 'database' | 'tool';
	description: string;
	items: string[];
}

export interface Experience {
	role: string;
	company: string;
	period: string;
	location?: string;
	description: string;
	achievements: string[];
	stack: string[];
	current?: boolean;
}

export const profile = {
	name: 'Aleixo Fernández Cuevas',
	role: 'Desarrollador full stack y de automatización',
	intro:
		'Trabajo automatizando procesos con Microsoft Power Platform y construyendo aplicaciones web cuidadas, funcionales y bien estructuradas.',
};

export const navigationLinks = [
	{ label: 'Experiencia', href: '#experiencia' },
	{ label: 'Proyectos', href: '#proyectos' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'Tecnologías', href: '#tecnologias' },
	{ label: 'Certificados', href: '#certificados' },
	{ label: 'Contacto', href: '#contacto' },
];

export const hubSections = [
	{ id: 'perfil', label: 'Conóceme' },
	...navigationLinks.map((link) => ({ id: link.href.replace('#', ''), label: link.label })),
];

export const heroStats = [
	{ value: '4', label: 'Proyectos reales mostrados en el portafolio' },
	{ value: '4', label: 'Servicios listos para contratar' },
	{ value: '22', label: 'Certificados y formación completada' },
	{ value: '4', label: 'Canales de contacto y presencia profesional' },
];

export interface Interest {
	title: string;
	description: string;
	icon: 'chip' | 'spark' | 'mountain' | 'run' | 'hike';
}

export const about = {
	heading: 'Conóceme',
	title: 'Un poco sobre mí',
	lead: 'Trabajo en todo el desarrollo —frontend, backend y automatización de procesos—, aunque donde más disfruto es en el frontend.',
	body: 'Me gusta convertir ideas en productos funcionales y cuidar cada detalle del resultado. Mi objetivo: que cada proyecto se vea bien, se entienda rápido y resuelva un problema real. Código limpio, mantenible y fácil de escalar.',
};

export const interests: Interest[] = [
	{
		title: 'Tecnología',
		description: 'Me encanta trastear con herramientas y cacharrear con lo que voy aprendiendo.',
		icon: 'chip',
	},
	{
		title: 'Siempre a la última',
		description: 'Me gusta estar al día de lo último en desarrollo, producto y tendencias.',
		icon: 'spark',
	},
	{
		title: 'Trail',
		description: 'Disfruto del trail entre montañas: mi forma de desconectar y recargar ideas.',
		icon: 'mountain',
	},
	{
		title: 'Running',
		description: 'También salgo a correr en suelo para mantener el ritmo y la constancia.',
		icon: 'run',
	},
	{
		title: 'Senderismo',
		description: 'Y me pierdo por rutas de senderismo siempre que puedo.',
		icon: 'hike',
	},
];

export const projects: Project[] = [
	{
		title: 'FerCueAstro',
		category: 'Web personal',
		description:
			'Mi portafolio: navegación tipo hub, secciones por dominio y transiciones suaves entre paneles. Todo el contenido se gestiona desde una única fuente de datos.',
		outcome: 'Resultado: una web rápida y mantenible, con identidad propia para mostrar mi trabajo y captar contactos.',
		stack: ['Astro', 'Tailwind CSS', 'TypeScript'],
		status: 'Publicado',
		liveUrl: 'https://aleixofdezcuevas.es/',
		repoUrl: 'https://github.com/FerCueA/FerCueAstro',
	},
	{
		title: 'Álvaro García',
		category: 'Landing de negocio',
		description: 'Landing para un negocio de osteopatía, quiromasaje y terapias naturales en Las Palmas de Gran Canaria.',
		outcome: 'Resultado: orientada a conversión en móvil y a reservas por WhatsApp.',
		stack: ['Astro', 'Tailwind CSS'],
		status: 'Publicado',
		liveUrl: 'https://alvarogarciaosteopata.es/',
		repoUrl: 'https://github.com/FerCueA/AlvaroG',
	},
	{
		title: 'Juan González',
		category: 'Landing musical (SPA)',
		description:
			'Aplicación de una sola página para presentar la propuesta artística de Juan González, con una identidad visual inspirada en el jazz y el blues.',
		outcome: 'Resultado: presencia online más cuidada y canal de contratación más visible.',
		stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'SSR'],
		status: 'Publicado',
		liveUrl: 'https://juangzsz.netlify.app/',
		repoUrl: 'https://github.com/FerCueA/JuanGzSz',
	},
	{
		title: 'Duit',
		category: 'Proyecto de ciclo · DAW',
		description:
			'Aplicación web como proyecto de ciclo de Desarrollo de Aplicaciones Web: conecta clientes con profesionales y gestiona ofertas, candidaturas, perfiles y valoraciones.',
		outcome: 'Resultado: base backend robusta con arquitectura MVC y despliegue en producción.',
		stack: ['Java', 'Spring Boot', 'PostgreSQL', 'MVC'],
		status: 'Proyecto académico',
		liveUrl: 'https://duitapp.koyeb.app/',
		repoUrl: 'https://github.com/FerCueA/Duit',
	},
];

export const experiences: Experience[] = [
	{
		role: 'Desarrollador de automatización',
		company: 'Cognitiatech',
		period: 'Marzo 2026 — Actualidad',
		location: 'Gran Canaria (España)',
		description:
			'Consultora de IA y automatización, Microsoft Partner, especializada en Power Platform, agentes de IA y soluciones en la nube.',
		achievements: [
			'Diseño y mantenimiento de flujos en Power Automate dentro de Power Platform.',
			'Desarrollo de un tema para mejorar la interfaz de Redmine.',
			'Gestión y seguimiento de tareas e incidencias con Redmine.',
		],
		stack: ['Power Automate', 'Power Platform', 'Redmine', 'Microsoft 365'],
		current: true,
	},
	{
		role: 'Desarrollo web freelance',
		company: 'Proyectos propios',
		period: 'En paralelo',
		description:
			'Diseño y desarrollo de webs corporativas, landings y aplicaciones para clientes y proyectos propios, cuidando rendimiento, claridad y conversión.',
		achievements: [
			'Webs corporativas y landings publicadas y funcionando en producción.',
			'Aplicaciones web con arquitectura MVC y despliegue propio.',
			'Trabajo directo con el cliente: del concepto a la publicación.',
		],
		stack: ['Astro', 'Angular', 'Tailwind CSS', 'Spring Boot'],
	},
];

export const services: Service[] = [
	{
		title: 'Página web',
		description: 'Web profesional, responsive y optimizada para tu negocio o marca personal.',
		icon: 'monitor',
		cta: 'Solicitar web',
		inquiry: 'Hola Aleixo, me interesa una página web profesional para mi negocio o marca personal.',
		featured: true,
	},
	{
		title: 'Servidor + gestión',
		description: 'Incluye hosting, dominio y panel de gestión personalizado.',
		icon: 'server',
		cta: 'Ver gestión',
		inquiry: 'Hola Aleixo, quiero información sobre servidor, dominio y panel de gestión para mi proyecto.',
		featured: true,
	},
	{
		title: 'Redes sociales, logotipo y marca',
		description: 'Diseño de logotipo, branding y creación de perfiles sociales profesionales.',
		icon: 'brand',
		cta: 'Impulsar marca',
		inquiry: 'Hola Aleixo, me interesa mejorar mi marca, logotipo y presencia en redes sociales.',
	},
	{
		title: 'Otros / A medida',
		description: 'Soluciones personalizadas, consúltame sin compromiso.',
		icon: 'custom',
		cta: 'Consultar idea',
		inquiry: 'Hola Aleixo, tengo una idea o necesidad personalizada y me gustaría comentarla contigo.',
	},
];

export const skillGroups: SkillGroup[] = [
	{
		title: 'Frontend',
		icon: 'code',
		description: 'Interfaces limpias, adaptables y con buen rendimiento.',
		items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Astro', 'Angular', 'Tailwind CSS', 'Bootstrap'],
	},
	{
		title: 'Backend',
		icon: 'server',
		description: 'Lógica de servidor y APIs con bases sólidas.',
		items: ['Java', 'Spring Boot', 'MVC'],
	},
	{
		title: 'Automatización',
		icon: 'bolt',
		description: 'Flujos que ahorran tiempo y reducen tareas manuales.',
		items: ['Power Automate', 'Power Platform', 'Microsoft 365'],
	},
	{
		title: 'IA',
		icon: 'bot',
		description: 'Herramientas de IA que aplico en el día a día del desarrollo.',
		items: ['Agentes de IA', 'OpenCode', 'Claude'],
	},
	{
		title: 'Gestión de proyectos',
		icon: 'clipboard',
		description: 'Organización, seguimiento de tareas e incidencias.',
		items: ['Redmine', 'Trello'],
	},
	{
		title: 'Bases de datos',
		icon: 'database',
		description: 'Motores con los que estructuro, consulto y mantengo información.',
		items: ['MySQL', 'PostgreSQL'],
	},
	{
		title: 'Herramientas',
		icon: 'tool',
		description: 'Software y servicios que uso para programar y desplegar.',
		items: ['Git', 'GitHub', 'Docker', 'Figma', 'VS Code', 'DBeaver', 'Netlify'],
	},
];

export const certificates: Certificate[] = [
	{
		title: 'Carta de recomendación (prácticas)',
		category: 'Recomendaciones',
		issuer: 'Documento firmado (PDF)',
		href: '/recomendacion/Carta_recomendacion_Aleixo_Fernandez_signed.pdf',
	},
	{
		title: 'Curso de Spring Boot y Spring MVC 5',
		category: 'Java y Spring',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_curso_de_spring_boot_y_spring_mvc_5__creando_una_aplicación_con_spring_boot_y_spring_mvc.pdf',
	},
	{
		title: 'Introducción a la administración de BBDD con MySQL',
		category: 'Bases de datos',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_introducción_a_la_administración_de_bbdd_con_mysql.pdf',
	},
	{
		title: 'Onboarding de becas OpenWebinars',
		category: 'Herramientas',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_onboarding_de_becas_openwebinars.pdf',
	},
	{
		title: 'Fundamentos de JavaScript',
		category: 'JavaScript',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_fundamentos_de_javascript.pdf',
	},
	{
		title: 'Introducción a Docker',
		category: 'Herramientas',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_introducción_a_docker.pdf',
	},
	{
		title: 'Manipulación del DOM desde JavaScript',
		category: 'JavaScript',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_curso_de_manipulación_del_dom_desde_javascript.pdf',
	},
	{
		title: 'Especialización en JavaScript: asincronía, prototipos y clases',
		category: 'JavaScript',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_especialización_en_javascript__asincronía_prototipos_y_clases.pdf',
	},
	{
		title: 'Transformaciones, transiciones y animaciones con CSS3',
		category: 'Frontend',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_transformaciones_transiciones_y_animaciones_con_css3.pdf',
	},
	{
		title: 'Curso de maquetación web con CSS',
		category: 'Frontend',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_curso_de_maquetación_web_con_css.pdf',
	},
	{
		title: 'Curso de Figma',
		category: 'Herramientas',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_curso_de_figma.pdf',
	},
	{
		title: 'Curso de Git',
		category: 'Herramientas',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_curso_de_git.pdf',
	},
	{
		title: 'Java desde 0: introducción',
		category: 'Java y Spring',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_java_desde_0__introducción.pdf',
	},
	{
		title: 'Programación asíncrona con Promises en JavaScript',
		category: 'JavaScript',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_programación_asíncrona_con_promises_en_javascript.pdf',
	},
	{
		title: 'Curso de SQL desde cero',
		category: 'Bases de datos',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_curso_de_sql_desde_cero.pdf',
	},
	{
		title: 'Java desde 0: orientación a objetos',
		category: 'Java y Spring',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_java_desde_0__orientación_a_objetos.pdf',
	},
	{
		title: 'Patrones de diseño con JavaScript',
		category: 'JavaScript',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_curso_de_patrones_de_diseño_con_javascript.pdf',
	},
	{
		title: 'Introducción a Spring Framework',
		category: 'Java y Spring',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_introducción_a_spring_framework.pdf',
	},
	{
		title: 'Responsive Web Design',
		category: 'Frontend',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_curso_de_responsive_web_design.pdf',
	},
	{
		title: 'Flexbox y CSS Grid',
		category: 'Frontend',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_curso_de_flexbox_y_css_grid.pdf',
	},
	{
		title: 'Gestión de documentación técnica con GitHub y Markdown',
		category: 'Herramientas',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_gestión_de_documentación_técnica_con_github_y_markdown.pdf',
	},
	{
		title: 'Dominando Bootstrap 5',
		category: 'Frontend',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_dominando_bootstrap_5__desarrollo_de_sitios_web_responsive.pdf',
	},
	{
		title: 'HTML5 y CSS3',
		category: 'Frontend',
		issuer: 'PDF de certificado',
		href: '/certificados/certificado_curso_de_html5_y_css3.pdf',
	},
];

export const contactLinks: ContactLink[] = [
	{
		label: 'Correo',
		value: 'fercuea90@protonmail.com',
		href: 'mailto:fercuea90@protonmail.com',
	},
	{
		label: 'LinkedIn',
		value: 'linkedin.com/in/aleixo-fernandez-cuevas-395a52367',
		href: 'https://www.linkedin.com/in/aleixo-fernandez-cuevas-395a52367/',
	},
	{
		label: 'GitHub',
		value: 'github.com/FerCueA',
		href: 'https://github.com/FerCueA',
	},
	{
		label: 'WhatsApp',
		value: '+34 628 23 07 16',
		href: 'https://wa.me/34628230716',
	},
];
