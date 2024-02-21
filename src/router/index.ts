import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ProjectsDisplay from "@/components/Projects.vue";
import ProjectDetail from "@/components/ProjectDetail.vue";
import HomePage from "@/components/Home.vue";
import ExperiencePage from "@/components/Experience.vue";
import ContactPage from "@/components/Contact.vue";
// import Home from '@/views/Home.vue'
// import Cats from '@/views/Cats.vue'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectsDisplay,
    children: [
      {
        path: ":projectName",
        name: "ProjectDetail",
        component: ProjectDetail,
      },
    ],
  },
  {
    path: "/experience",
    name: "Experience",
    component: ExperiencePage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
