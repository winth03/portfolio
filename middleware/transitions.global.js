export default defineNuxtRouteMiddleware((to, from) => {
    const pageIndex = {
        'index': 0,
        'tour': 1,
        'blog': 2,
        'archive': 3,
    }

    if (to.fullPath !== from.fullPath && to.hash == '') {
        if (pageIndex[from.name] < pageIndex[to.name]) {
            from.meta.pageTransition = { name: 'page-left', mode: 'out-in' }
            to.meta.pageTransition = { name: 'page-right', mode: 'out-in' }
        }
        else if (pageIndex[from.name] > pageIndex[to.name]) {
            from.meta.pageTransition = { name: 'page-right', mode: 'out-in' }
            to.meta.pageTransition = { name: 'page-left', mode: 'out-in' }
        }
        else {
            from.meta.pageTransition = { name: 'page-fade', mode: 'out-in' }
            to.meta.pageTransition = { name: 'page-fade', mode: 'out-in' }
        }
    }
})