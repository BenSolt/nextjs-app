export default function handler(req, res) {
    res.status(200).json(
        {
            name: 'First Blog',
            info: ' this is the first blog, write what it is about here'
        }
    );
};