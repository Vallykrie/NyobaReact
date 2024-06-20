function ProfilePicture() {
    const imageUrl = 'https://i.pinimg.com/originals/8d/12/49/8d1249009c78480d4f773714179f8d8f.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img src={imageUrl} alt="profile" onClick={(e) => handleClick(e)}/>
    );
}

export default ProfilePicture;