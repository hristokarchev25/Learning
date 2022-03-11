import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { ref, onUnmounted } from "vue";

const config = {
  apiKey: "AIzaSyDUVu2jzlxgFJvLGih0wJ4ivLTEqSebLMI",
  authDomain: "learning-e695e.firebaseapp.com",
  projectId: "learning-e695e",
  storageBucket: "learning-e695e.appspot.com",
  messagingSenderId: "430972912268",
  appId: "1:430972912268:web:e572627493c94f140531a9",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const courseCollection = db.collection("courses");

export const createCourse = (course) => {
  return courseCollection.add(course);
};

export const getCourse = async (id) => {
  const course = await courseCollection.doc(id).get();
  return course.exists ? course.data() : null;
};

export const updateCourse = (id, course) => {
  return courseCollection.doc(id).update(course);
};

export const deleteCourse = (id) => {
  return courseCollection.doc(id).delete();
};

export const useLoadCourses = () => {
  const courses = ref([]);
  const close = courseCollection.onSnapshot((snapshot) => {
    courses.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return courses;
};
