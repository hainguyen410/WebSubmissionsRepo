const Notification = ({message}) => {
    const messageStyle = {
        color: "green",
        fontStyle: "italic",
        background: "lightgrey",
        fontSize: 20,
        bordeStyle: "solid",
        borderRadius: 5,
        borderColor:"green",
        borderWidth: 4,
        padding: 10,
        marginBottom: 10
    }
    return (
        <div style={messageStyle}>
            {message}
        </div>
    )
}

export default Notification