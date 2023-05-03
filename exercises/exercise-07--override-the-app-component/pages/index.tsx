// ✍️ create a type Props containing title as string

// ✍️ obtain the title prop
const Home = ({title}: { title: string }) => {
    return (
        <div>
            {/* ✍️ render the title prop */}
            <h1>{title}</h1>
        </div>
    )
}

export default Home
