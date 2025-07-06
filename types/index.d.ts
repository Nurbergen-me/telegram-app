interface UserData {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code: string;
    is_premium?: boolean;
}

interface City {
    id: string;
    name: string;
    country: string;
    image: string;
    short_desc: string;
}