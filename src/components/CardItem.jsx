import React from "react";

const CardItem = ({
                      index,
                      name,
                      description,
                      tags,
                      image,
                      source_code_link,
                  }) =>{
    return (
        <>
            <li className='cards__item'>
                {/*<Link className='cards__item__link' to={props.path}>*/}
                    <figure className='cards__item__pic-wrap'>
                        <img
                            className='cards__item__img'
                            alt='Travel Image'
                            src={image}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{description}</h5>
                    </div>
                {/*</Link>*/}
            </li>
        </>

    )
}
export default CardItem