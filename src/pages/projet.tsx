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
            <div className='w-[95%] mx-auto pb-4 flex justify-between'>
                <Menu />
                <div className=' w-[85%]'>
                    <div className=' w-[100%] h-[100px] flex items-center '>
                        <span className='text-[#8186A0] text-[.8em] font-bold pr-32'>Ajouter un projet</span>
                    </div>
                    <div className=' w-[100%] mx-auto flex justify-between'>
                        <div className='ContDescrptproject w-[75%] p-4 flex'>
                            <div className='flex flex-col w-[55%] px-1 '>
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
                                <div className='w-[60%] flex py-1 px-2 items-center justify-between UploadFile'>
                                    <span className='text-[.5em] text-[#8186A0] '>Choisir un fichier</span>
                                    <button className='text-[.5em] text-[#8186A0] fileBtn '>Browser</button>
                                    <button className='text-[.5em] text-[#8186A0] fileBtn ' >Upload</button>
                                </div>

                            </div>
                            <div className='flex flex-col w-[45%] px-1'>
                                <span className='text-[.65em] text-[#8186A0] font-extrabold '>Exigences</span>
                                <div className='flex flex-col w-[100%] my-1 space-y-1'>
                                    <span className='flex flex-col space-y-1'>
                                        {
                                            exigences.map((item: any, index: any) =>
                                                <div className='w-[100%] flex space-x-1 items-center' key={index}>
                                                    <input className='text-[.65em] w-[90%] text-[#8186A0] font-normal inputExig'
                                                        type='text'
                                                        placeholder={item.value} />
                                                    <FontAwesomeIcon className='text-[.85em] text-[#b52323]' icon={faMinusCircle} onClick={() => deleteExigence(index)} />
                                                </div>)
                                        }

                                    </span>
                                    <div className='w-[100%] flex space-x-1 items-center'>
                                        <input className='text-[.65em] w-[90%] text-[#8186A0] font-normal inputExig'
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
                        <div className=' w-[25%] flex flex-col items-center space-y-2'>
                            <div className='blocFilter w-[95%] px-4 pt-8 pb-2 flex flex-col space-y-3'>
                                {
                                    dataFilter.map((value, index) =>
                                        <span key={index}
                                            className={value.selected ?
                                                'text-[.6em] text-[#2b23b5] font-extrabold flex items-center space-x-1 ' :
                                                'text-[.6em] text-[#8186A0] font-bold flex items-center space-x-1 '}>
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