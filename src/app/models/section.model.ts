
export class Meta {
    title: string;
    location: string;
    description: string;
    heroImage: string;
}

export class Action {
    title: string;
    url: string;
}

export class InnerContent {
    style: any[];
    _id: string;
    title: string;
    url: string;
    name: string;
    direction: string;
    workExperience: string;
    teachExperience: string;
}

export class Content {
    meta: Meta;
    action: Action;
    _id: string;
    type: string;
    content: InnerContent[];
    __v: number;
}

export class Section {
    content: Content[];
}
