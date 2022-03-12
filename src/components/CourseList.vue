<template>
  <div class="boreder__table">
    <div class="card mt-4">
      <table class="table m-0">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Course name</th>
            <th scope="col">Description</th>
            <th scope="col">Lessons</th>
            <th scope="col">State</th>
            <th scope="col">Date added</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{ id, name, lessons, description, date, image } in courses"
            :key="id"
          >
            <td>{{ id }}</td>
            <td>{{ name }}</td>
            <td>{{ description }}</td>
            <td>{{ lessons }}</td>
            <td></td>
            <td>{{ date }}</td>
            <td><img v-bind:src="image" /></td>
            <td>
              <router-link :to="`/edit/${id}`">
                <button class="btn btn-primary btn-sm me-2">Edit</button>
              </router-link>
              <button class="btn btn-danger btn-sm" @click="deleteCourse(id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useLoadCourses, deleteCourse } from "@/firebase";

export default {
  setup() {
    const courses = useLoadCourses();
    return { courses, deleteCourse };
  },
};
</script>

<style>
.boreder__table {
  margin: 25px;
  /* border: 1px solid black; */
}
td > img {
  width: 55px;
  object-fit: contain;
}
</style>
