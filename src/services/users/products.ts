import { getDocs, query, QueryConstraint } from "@firebase/firestore";
import { collection } from "firebase/firestore";
import { IProduct } from "../../shared/constants";
import { fireStore } from "../../shared/firebase-db";

export async function fetchingProductsByQuery(qu: QueryConstraint[]) {
  try {
    const q = query(collection(fireStore, "products"), ...qu);
    const querySnapshot = await getDocs(q);

    const data: IProduct[] = [];
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        title: doc.get("title"),
        category: doc.get("category"),
        link: doc.get("link"),
        price: doc.get("price"),
        image: { name: doc.get("image")["name"], src: doc.get("image")["src"] },
        featured: doc.get("featured"),
      });
    });
    return data;
  } catch (error) {
    console.log(error);

    throw error;
  }
}
