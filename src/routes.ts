import HomeRoute from "@routes/index.route"
import BookRoute from "@routes/ticket_type.route"

const routes = [
    {
        path:"/",
        func: HomeRoute,
    },
    {
        path:"/ticket",
        func: BookRoute,
    }
]

export default routes;