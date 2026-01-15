export interface Blog {
    id: string;
    title: string;
    content: string;
    author: string;
    image_url?: string;
    published: boolean;
    created_at: string;
    updated_at: string;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    event_date: string;
    location: string;
    created_at: string;
}

export interface Judgment {
    id: string;
    title: string;
    court: string;
    judgment_date: string;
    case_number: string;
    link?: string;
    created_at: string;
}

export interface HighCourt {
    name: string;
    location: string;
    website: string;
}

export interface BareAct {
    id: string;
    title: string;
    year: string;
    category: string;
}

export interface BarAssociation {
    name: string;
    state: string;
    contact: string;
    website: string;
}
