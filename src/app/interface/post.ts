

export interface Post {
    id: number,
    title: string,
    description: string,
    address: string,
    price: number,
    available: boolean,
    images: string[],
    ownerId: number,
    creationDate: Date
}