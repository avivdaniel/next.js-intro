import {NextApiHandler} from "next";
import users from '../../../data/users';

const handler: NextApiHandler = async (req, res) => {
    if (req.method !== 'GET') return res.status(405).json({error: 'Method not allowed'})

    const userId = req.query.userId as string;
    const user = users.find(({id}) => id === parseInt(userId))

    return user ? res.status(200).json(user) : res.status(404).json({error: 'User not found'})
}

export default handler