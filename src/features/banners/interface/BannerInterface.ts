export interface BannerInterface {
    _id: string;
    productID: string;
    title: string;
    description: string;
    imageURL: string;
    productURL: string;
    note: string;
    category: string;
    authorID: string;
    authorUsername: string;
    createdAt: string;
    updatedAt: string;
}

export interface NewBannerInterface {
  productID: string;
  title: string;
  description: string;
  imageURL: string;
  productURL: string;
  note: string | null;
  category: string;
}
