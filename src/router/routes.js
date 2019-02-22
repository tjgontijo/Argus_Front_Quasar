
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
      { path: 'users', component: () => import('pages/admin/users/ProfileEdit.vue') },
      { path: 'users/profile-edit', component: () => import('pages/admin/users/ProfileEdit.vue') },
      { path: 'events', component: () => import('pages/admin/events/Index.vue') },
      { path: 'breeds', component: () => import('pages/admin/breeds/Index.vue') },
      { path: 'genders', component: () => import('pages/admin/genders/Index.vue') },
      { path: 'gender', component: () => import('pages/admin/genders/create.vue') },
      { path: 'gender/:id', component: () => import('pages/admin/genders/edit.vue') },
      { path: 'clients', component: () => import('pages/admin/clients/Index.vue') }
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
