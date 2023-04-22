import Header from '../Components/Head';
import Nav from '../Components/NavBar';
import Menu from '@/Components/Menu';

// import fontAweson
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

// recoil.js
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { ExigenceList } from '../Components/State'

const Elie = () => {
    //hooks
    let exigences: [] | any;
    const [newExig, setNewExig] = useState('Ex: Maitrise de javascript');
    const exigencesState = useRecoilState(ExigenceList);

    //affectation
    exigences = exigencesState[0];
    const setExigence = exigencesState[1]

    const dataFilter = [
        {
            text: 'Titre',
            selected: true
        },
        {
            text: 'Description',
            selected: true
        },
        {
            text: 'Categorie',
            selected: false
        },
        {
            text: 'Budget',
            selected: false
        },
        {
            text: 'Condition des travail',
            selected: false
        }
    ];

    const addExigence = () => {
        setExigence((lastExigenceTab: any) => [
            ...lastExigenceTab,
            {
                value: newExig
            }
        ]);

    };

    const deleteExigence = (index: number) => {
        let tabExigence = [...exigences];
        tabExigence.splice(index, 1);
        // update tab
        setExigence(() => tabExigence);
    }

    return (
        <>

            <Header />
            <Nav />
            <div className='w-[100%] md_lg:w-[90%] mx-auto py-4 flex flex-col md:flex-row md:justify-between'>
                <Menu />
                <div className=' w-[95%] sm:w-[90%] mx-auto'>
                    <div className=' w-[100%] h-[60px] py-1 mobile:p-0 sm:h-[100px] flex items-center FilterPoint:flex-row'>
                        <span className='text-[#8186A0] text-[.6em] sm:text-[.8em] font-bold '>Ajouter un projet</span>
                    </div>
                    <div className=' mx-auto flex flex-col-reverse space-y-1 md_lg:space-x-1 md_lg:space-y-0 md_lg:flex-row  md_lg:justify-between '>
                        <div className='ContDescrptproject mt-1 w-[100%] md_lg:w-[75%] flex flex-col-reverse FilterPoint:flex-row items-around FilterPoint:items-start FilterPoint:justify-between p-4'>
                            <div className='flex  flex-col w-[100%] FilterPoint:w-[55%] mt-1 FilterPoint:m-0 px-1 '>
                                <span className='text-[.65em] text-[#8186A0] font-extrabold'>Titre</span>
                                <div className='w-[100%] flex my-1 items-center'>
                                    <input className='text-[.65em] w-[100%] text-[#8186A0] font-normal inputExig' type='text' placeholder="Ex: Site Web d'information" />
                                </div>

                                <span className='text-[.65em] text-[#8186A0] font-extrabold mt-1'>Description</span>
                                <div className='w-[100%] flex my-1 items-center'>
                                    <textarea className='text-[.65em] w-[100%] h-[100px] text-[#8186A0] font-normal' placeholder="Ex: Site Web d'information" />
                                </div>

                                <span className='text-[.65em] text-[#8186A0] font-extrabold mt-1'>Tàche à faire </span>
                                <div className='w-[100%] flex my-1 items-center'>
                                    <textarea className='text-[.65em] w-[100%] text-[#8186A0] h-[50px] font-normal' placeholder="Ex: Site Web d'information" />
                                </div>

                                <span className='text-[.65em] text-[#8186A0] font-extrabold my-1'>Joindre des fichiers</span>
                                <div className='w-[80%] FilterPoint:w-[60%] flex py-1 px-2 items-center justify-between UploadFile'>
                                    <span className='text-[.5em] text-[#8186A0] '>Choisir un fichier</span>
                                    <button className='text-[.5em] text-[#8186A0] fileBtn '>Browser</button>
                                    <button className='text-[.5em] text-[#8186A0] fileBtn ' >Upload</button>
                                </div>

                            </div>
                            <div className='flex flex-col w-[100%] FilterPoint:w-[45%] px-1'>
                                <span className='text-[.65em] text-[#8186A0] font-extrabold '>Exigences</span>
                                <div className='flex flex-col w-[100%] my-1 space-y-1'>
                                    <span className='flex flex-col space-y-1'>
                                        {
                                            exigences.map((item: any, index: any) =>
                                                <div className='w-[100%] flex space-x-1 items-center' key={index}>
                                                    <input className='text-[.65em] w-[100%] FilterPoint:w-[90%] text-[#8186A0] font-normal inputExig'
                                                        type='text'
                                                        placeholder={item.value} />
                                                    <FontAwesomeIcon className='text-[.85em] text-[#b52323]' icon={faMinusCircle} onClick={() => deleteExigence(index)} />
                                                </div>)
                                        }

                                    </span>
                                    <div className='w-[100%] flex space-x-1 items-center'>
                                        <input className='text-[.65em] w-[100%] FilterPoint:w-[90%] text-[#8186A0] font-normal inputExig'
                                            type='text'
                                            placeholder='Ex: Maitrise de javascript'
                                            onChange={(event) => {
                                                console.log(event.target.value)
                                            }} />
                                        <FontAwesomeIcon className='text-[.85em] text-[#2b23b5]' icon={faPlusCircle} onClick={addExigence} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-between md_lg:flex-col md_lg:w-[25%] md_lg:items-center'>
                            <div className='blocFilter my-1 p-4 w-[100%] md_lg:m-0 md_lg:pt-8 flex flex-col justify-around mobile:flex-row mobile:items-center justify-around md_lg:items-start md_lg:justify-between md_lg:space-y-2 md_lg:flex-col'>
                                {
                                    dataFilter.map((value, index) =>
                                        <span key={index}
                                            className={value.selected ?
                                                ' text-[.6em] text-[#2b23b5] font-extrabold flex items-center space-x-1 ' :
                                                ' text-[.6em] text-[#8186A0] font-bold flex items-center space-x-1 '}>
                                            <FontAwesomeIcon icon={faCheck} /><span>{value.text}</span> </span>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Elie;