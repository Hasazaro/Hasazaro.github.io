import type { LucideIcon } from 'lucide-react';
import { CalendarCheck, Gamepad2, ShoppingBasket } from 'lucide-react';

/*
 * All of the portfolio's personal content lives here.
 * Edit this file to change your name, bio, projects and links.
 */

export type Project = {
    number: string;
    name: string;
    tagline: string;
    description: string;
    stack: string[];
    icon: LucideIcon;
    color: 'moss' | 'sun' | 'rust';
    status: 'In progress' | 'Completed' | 'Live';
    href?: string;
    repo?: string;
};

export const profile = {
    name: 'Hasan Abdo',
    role: 'Software developer',
    intro: 'Ik zit in de laatste fase van mijn mbo-opleiding Software Developer (niveau 4) en bouw fullstack webapplicaties met PHP, Laravel en MySQL, van eerste concept tot werkend product.',
    email: 'you@example.com',
    github: 'https://github.com/Hasazaro',
    availability: 'Open voor nieuwe kansen',
};

export const about: string[] = [
    'Ik zit in de slotfase van mijn mbo-opleiding Software Development (niveau 4) aan het Alfa-college. Ik ben een probleemoplosser die graag nieuwe uitdagingen aangaat om mijn fullstack-skills verder uit te bouwen.',
    'Ik denk in resultaten en doelen, ben enthousiast en werk met daadkracht. Ik neem snel initiatief, durf vragen te stellen wanneer dat nodig is en ga altijd voor een optimaal eindresultaat met het team.',
    'Tijdens mijn stage bij Afosto werkte ik aan e-commercesystemen in een professioneel ontwikkelteam, met focus op nauwkeurigheid en schone code.',
];

export type TimelineEntry = {
    title: string;
    place: string;
    period: string;
    points: string[];
};

export const experience: TimelineEntry[] = [
    {
        title: 'Stagiair Software Developer',
        place: 'Afosto',
        period: '2025',
        points: [
            'Gewerkt aan en ondersteund bij het beheren en ontwikkelen van oplossingen binnen het Afosto CMS.',
            'Praktijkervaring opgedaan met e-commercesystemen, frontend/backend-koppelingen en webshops.',
            'Samengewerkt in een professioneel ontwikkelteam met focus op nauwkeurigheid en schone code.',
        ],
    },
    {
        title: 'Vrijwilliger',
        place: 'De Jonge Onderzoekers',
        period: '2022',
        points: [
            'Begeleiden van en samenwerken aan technologische en wetenschappelijke projecten.',
            'Praktische instelling, proactief meedenken en het overbrengen van passie voor techniek.',
        ],
    },
];

export const education: TimelineEntry[] = [
    {
        title: 'MBO niveau 4 – Software Developer',
        place: 'Alfa-college',
        period: 'sep 2023 – heden',
        points: [
            'Webdevelopment met PHP (Laravel), MySQL, HTML, CSS, WordPress en JavaScript.',
            'E-commercewebsites ontwikkelen van concept tot werkend product.',
            'Versiebeheer met Git en responsive webdesign.',
        ],
    },
    {
        title: 'Schakeljaar',
        place: 'Alfa-college',
        period: 'sep 2022 – jun 2023',
        points: [
            'Voorbereidend jaar op de mbo-opleiding Software Developer niveau 4.',
        ],
    },
];

export const projects: Project[] = [
    {
        number: '01',
        name: "Hasan's Horeca",
        tagline: 'Reserveringssysteem voor restaurants',
        description:
            'Teamproject met vier developers: een restaurantwebsite waar gasten online een tafel reserveren en zelf kunnen annuleren, met bevestigingsmails. In het adminpaneel beheert het personeel reserveringen, tafels, openingstijden, het menu en rollen.',
        stack: [
            'Laravel',
            'React',
            'TypeScript',
            'Inertia',
            'Tailwind CSS',
            'MySQL',
        ],
        icon: CalendarCheck,
        color: 'rust',
        status: 'In progress',
        repo: 'https://github.com/Hasazaro/restaurant-reservations',
    },
    {
        number: '02',
        name: 'Webshop',
        tagline: 'Online supermarkt',
        description:
            'Een Nederlandse supermarkt-webshop met een hero-slider, productcategorieën uit MySQL, een winkelwagen die in de browser bewaard blijft, en registreren en inloggen voor gebruikers.',
        stack: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
        icon: ShoppingBasket,
        color: 'moss',
        status: 'Completed',
        repo: 'https://github.com/Hasazaro/Webshop',
    },
    {
        number: '03',
        name: 'My Game List',
        tagline: 'Gamecollectie-tracker',
        description:
            'Zoek games via de RAWG video game API en sla ze op in je eigen collectie, met registreren en inloggen via gehashte wachtwoorden.',
        stack: ['PHP', 'MySQL', 'JavaScript', 'REST API'],
        icon: Gamepad2,
        color: 'sun',
        status: 'Completed',
        repo: 'https://github.com/Hasazaro/MygameList',
    },
];

export const skills: { group: string; items: string[] }[] = [
    {
        group: 'Backend',
        items: ['PHP', 'Laravel', 'MySQL', 'WordPress'],
    },
    {
        group: 'Frontend & tools',
        items: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Tailwind CSS',
            'Responsive design',
            'Git & GitHub',
        ],
    },
    {
        group: 'Soft skills',
        items: [
            'Sterke communicatie',
            'Oplossingsgericht',
            'Oog voor detail',
            'Leergierig',
            'Teamspeler',
        ],
    },
];

export const fieldNotes: { label: string; value: string }[] = [
    { label: 'Woonplaats', value: 'Assen' },
    { label: 'Opleiding', value: 'MBO 4 Software Developer' },
    { label: 'Laatste stage', value: 'Afosto (2025)' },
    { label: 'Focus', value: 'Fullstack web & e-commerce' },
    { label: 'Waarden', value: 'Schone code, teamwork, resultaat' },
];
