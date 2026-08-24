interface MyProfileProps {
    name: string
    bio: string
    age: number
    tech: string
    isStudent?: boolean
}

function MyProfile({name, bio, tech, age, isStudent}:MyProfileProps ) {
  return (
    <div>
     <h2>{name}</h2>
      <p>{bio}</p>
      <p>My favorite tech: {tech}</p>
      <p>My age is {age}</p>
      {isStudent && <p>I am a Student</p>}
    </div>
  )
}

export default MyProfile