
const routes = [
  {
    path: '/',
    component: () => import('layouts/SiteLayout.vue'),
    children: [
      { path: '', component: () => import('pages/site/home/Index.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/admin/home/Index.vue') },
      { path: 'users', component: () => import('pages/admin/users/Index.vue') },
      { path: 'users/profile-edit', component: () => import('pages/admin/users/ProfileEdit.vue') },
      { path: 'events', component: () => import('pages/admin/events/Index.vue') },
      { path: 'breeds', component: () => import('pages/admin/breeds/index.vue') },
      { path: 'genders', component: () => import('pages/admin/genders/index.vue') },
      { path: 'gender', component: () => import('pages/admin/genders/create.vue') },
      { path: 'gender/:id', component: () => import('pages/admin/genders/edit.vue') },
      { path: 'course-types', component: () => import('pages/admin/course_types/index.vue') },
      { path: 'course-type', component: () => import('pages/admin/course_types/create.vue') },
      { path: 'course-type/:id', component: () => import('pages/admin/course_types/edit.vue') },
      { path: 'units', component: () => import('pages/admin/units/index.vue') },
      { path: 'unit', component: () => import('pages/admin/units/create.vue') },
      { path: 'unit/:id', component: () => import('pages/admin/units/edit.vue') },
      { path: 'courses', component: () => import('pages/admin/courses/index.vue') },
      { path: 'course', component: () => import('pages/admin/courses/create.vue') },
      { path: 'course/:id', component: () => import('pages/admin/courses/edit.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
