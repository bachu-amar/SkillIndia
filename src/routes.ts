import HomeRoute from "@routes/index.route"
import TicketRoute from "@routes/ticket.route"
import BookRoute from "@routes/ticket_type.route"

const routes = [
    {
        path:"/",
        func: HomeRoute,
    },
    {
        path:"/SkillIndia",
        func: TicketRoute,
    },
    {
        path:"/ticket",
        func: BookRoute,
    }
]

export default routes;