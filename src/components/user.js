import React from 'react';
import './user.css';

const users = [
    {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    },{
        name: 'Matthew Perry',
        imageUrl: 'https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/831/2023/10/30073731/shutterstock_101622553-200x200.webp',
        imageSize: 90,
    },{
        name: 'Paul Walker',
        imageUrl: 'https://racingnews.co/wp-content/uploads/2013/12/Paul-Walker-Crash-Kills-Fast-and-Furious-Actor-Z-200x200.jpg',
        imageSize: 90,
    },{
        name: 'Will Smith',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwN0cua7u6LCNhS9W1RectioMllbB3Xbelg&usqp=CAU',
        imageSize: 90,
    },{
        name: 'Dwayne Johnson',
        imageUrl: 'https://www.shutterstock.com/image-vector/may-2020-dwayne-johnson-vector-260nw-1741449800.jpg',
        imageSize: 90,
    },

]

export default function Users() {
    const userList = users.map((item, index) => {
       return <div className='user-block' key={index}>
            <h1>{item.name}</h1>
            <img
                className="avatar"
                src={item.imageUrl}
                alt={'Photo of' + item.name}
                style={
                    {
                        width: item.imageSize,
                        height: item.imageSize
                    }
                }
            /></div>
    })
    return (
        <div className='user-container'>
            {userList}
        </div>
    )
}