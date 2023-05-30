"use client"

const Gallery = () => {
    return (
        <div className="max-w-7xl">
            <div className="grid grid-cols-4 gap-2">
                <div className="row-span-2 col-span-2">
                    <img
                        className="rounded-l-[12px]"
                        src={"https://a0.muscache.com/im/pictures/2fd67464-8da1-419d-b8f7-dcb840a1be0a.jpg"}
                        width={752}
                        height={752} />
                </div>
                <div className="">
                    <img
                        className=""
                        src={"https://a0.muscache.com/im/pictures/2fd67464-8da1-419d-b8f7-dcb840a1be0a.jpg"}
                        width={752}
                        height={752} />
                </div>
                <div className="">
                    <img
                        className="rounded-tr-[12px]"
                        src={"https://a0.muscache.com/im/pictures/6d517f4c-1380-42c6-80a6-dd69dbd7aba6.jpg"}
                        width={752}
                        height={752} />
                </div>
                <div className="">
                    <img
                        className=""
                        src={"https://a0.muscache.com/im/pictures/ca9725e8-03fc-46b3-9379-c9b8833b0673.jpg"}
                        width={752}
                        height={752} />
                </div>
                <div className="">
                    <img
                        className="rounded-br-[12px]"
                        src={"https://a0.muscache.com/im/pictures/2fd67464-8da1-419d-b8f7-dcb840a1be0a.jpg"}
                        width={752}
                        height={752} />
                </div>
            </div>
        </div>
    )
}

export default Gallery