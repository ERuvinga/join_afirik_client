import React from "react";
import Image from "next/image";

interface dataofJob {
    data: any;
}

const DescriptionUser = (datasJobs: dataofJob) => {
    return (
        <>
            <div className='DescriptUser w-[100%] py-2'>
                <div className=" py-2 px-3 flex items-center justify-between">
                    <span className=" w-[54%] FilterPoint:px-3 FilterPoint:w-fit font-bold text-[.4em] FilterPoint:text-[.5em] sm:text-[.7em]">
                        Rediger la documentation de mon nouveau systeme de controle
                    </span>
                    <div className=" text-[#8186A0] flex items-center space-x-1 mobile:space-x-3">
                        <Image src="/images/shield.png" alt=" Shield" className="iconDescrpt w-[15px] h-[15px]" width={1} height={1} priority />
                        <span className="dollars px-3 py-[2px] text-[.4em] FilterPoint:text-[.6em]"> $12 300 </span>
                        <Image src="/images/star.png" alt=" star" className=" iconDescrpt  w-[15px] h-[15px]" width={1} height={1} priority />
                    </div>
                </div>
                <div className=" linet w-[100%]"></div>
                <div className="py-2 px-3 FilterPoint:px-6 text-[.35em] text-justify FilterPoint:text-[.4em] sm:text-[.5em] mb-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veniam temporibus provident
                        tempore minima ex dignissimos animi labore, excepturi consequatur ipsa ducimus, modi sint
                        enim doloremque ab maiores officiis? Et quae odit libero deserunt voluptatem earum dolorum molestiae
                        vero voluptate aliquid, autem ipsum laboriosam mollitia aperiam nihil recusandae in unde nemo necessitatibus
                        excepturi quaerat sed totam consequatur! Magni nam enim, expedita voluptatibus ipsam fugit. At ut id reprehenderit ab excepturi!
                    </p>
                </div>
                <div className="lineb w-[100%] my-2"></div>
                <div className=" pb-1 FilterPoint:py-2 px-3 FilterPoint:px-6 flex items-end FilterPoint:items-center justify-between">
                    <div className="  flex flex-col FilterPoint:flex-row items-center space-y-1 FilterPoint:space-x-2">
                        <img src={datasJobs.data.client.avatar}
                            alt=" Client"
                            className="imageClient w-[20px] h-[20px] FilterPoint:w-[30px] FilterPoint:h-[30px]"
                        />
                        <span className=" text-[.37em] sm:text-[.66em] font-bold">{`${datasJobs.data.client.lName} ${datasJobs.data.client.fName}`}</span>
                    </div>
                    <div className=" flex items-center justify-between">
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
                    <div className=" flex items-center justify-between">
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
                    <div className=" flex items-center justify-between">
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

                    <div className=" flex items-center justify-between">
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