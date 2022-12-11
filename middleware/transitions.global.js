export default defineNuxtRouteMiddleware((to, from) => {
    const pageIndex = {
        'index': 0,
        'tour': 1,
        'archive': 2,
    }

    if (pageIndex[from.name] < pageIndex[to.name]) {
        from.meta.pageTransition = { name: 'page-left' }
        to.meta.pageTransition = { name: 'page-right' }
    }
    else if (pageIndex[from.name] > pageIndex[to.name]) {
        from.meta.pageTransition = { name: 'page-right' }
        to.meta.pageTransition = { name: 'page-left'}
    }
    else {
        from.meta.pageTransition = { name: 'page-fade'}
        to.meta.pageTransition = { name: 'page-fade'}
    }
})