import { addDoc, collection, Timestamp } from "firebase/firestore";
import { auth, db } from "../../firebase/config";

export const saveWorkToDatabase = (date, hours, cleanerId) => {
  const userId = auth.currentUser.uid;
  const worksRef = collection(db, "works");
  const startDate = new Date(date);
  const endDate = new Date(date + hours * 3600000);

  const newWork = {
    cleanerId,
    userId,
    startDate: Timestamp.fromDate(startDate),
    endDate: Timestamp.fromDate(endDate),
  };
  addDoc(worksRef, newWork).then(() => {
    console.log("Hecho");
  });
};
