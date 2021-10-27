import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://static.lexpress.fr/medias_12267/w_640,h_358,c_fill,g_center/v1604585788/le-film-d-animation-demon-slayer-est-sorti-en-salle-au-japon-le-16-octobre_6280800.jpg" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Mangas</span>
                    <span className="postCat">Animes</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dicta distinctio consequuntur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptas sed incidunt consectetur veniam beatae maiores quo, doloremque nisi tenetur rerum expedita laborum amet, facilis, 
            inventore ab quidem harum nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dicta distinctio consequuntur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptas sed incidunt consectetur veniam beatae maiores quo, doloremque nisi tenetur rerum expedita laborum amet, facilis, 
            inventore ab quidem harum nostrum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dicta distinctio consequuntur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis voluptas sed incidunt consectetur veniam beatae maiores quo, doloremque nisi tenetur rerum expedita laborum amet, facilis.</p>
        </div>
    )
}
