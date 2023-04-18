import React from "react";
import Image from "next/image";

const DescriptionUser = () => {

    return (
        <>
            <div className=' DescriptUser w-[100%] py-2'>
                <div className="py-2 px-6 flex items-center justify-between">
                    <span className=" font-bold text-[.7em]">
                        Rediger la documentation de mon nouveau systeme de controle
                    </span>
                    <div className=" text-[.6em] text-[#8186A0] flex items-center space-x-3">
                        <Image src="/images/shield.png" alt=" Shield" className="iconDescrpt" width={1} height={1} priority />
                        <span className="dollars"> $12 300 </span>
                        <Image src="/images/star.png" alt=" Shield" className=" iconDescrpt" width={1} height={1} priority />
                    </div>
                </div>
                <div className="linet w-[100%]"></div>
                <div className="py-2 px-6 text-[.5em] mb-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veniam temporibus provident
                        tempore minima ex dignissimos animi labore, excepturi consequatur ipsa ducimus, modi sint
                        enim doloremque ab maiores officiis? Et quae odit libero deserunt voluptatem earum dolorum molestiae
                        vero voluptate aliquid, autem ipsum laboriosam mollitia aperiam nihil recusandae in unde nemo necessitatibus
                        excepturi quaerat sed totam consequatur! Magni nam enim, expedita voluptatibus ipsam fugit. At ut id reprehenderit ab excepturi!
                    </p>
                </div>
                <div className="lineb w-[100%] my-2"></div>
                <div className="py-2 px-6  flex items-center justify-between">
                    <div className=" flex items-center space-x-2">
                        <Image src="/images/user.png"
                            alt=" user"
                            className="imageDescrpt "
                            width={1}
                            height={1}
                            priority
                        />
                        <span className=" text-[.66em] font-bold">Elie Ruvinga</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-1 ">
                            <Image src="/images/chronometer.png"
                                alt=" user"
                                className="iconsDetails"
                                width={1}
                                height={1}
                                priority
                            />
                            <span className="text-[.4em] text-[#8186A0]"> 18 Aout 2021</span>
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-1 ">
                            <Image src="/images/team.png"
                                alt=" user"
                                className="iconsDetails"
                                width={1}
                                height={1}
                                priority
                            />
                            <span className="text-[.4em] text-[#8186A0]"> For All</span>
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-1 ">
                            <Image src="/images/eye.png"
                                alt=" user"
                                className="iconsDetails"
                                width={1}
                                height={1}
                                priority
                            />
                            <span className="text-[.4em] text-[#8186A0]"> 2930</span>
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-1 ">
                            <Image src="/images/comment.png"
                                alt=" user"
                                className="iconsDetails"
                                width={1}
                                height={1}
                                priority
                            />
                            <span className="text-[.4em] text-[#8186A0]"> 32 Offices</span>
                        </span>
                    </div>

                </div>

            </div>
        </>
    )
}

export default DescriptionUser;