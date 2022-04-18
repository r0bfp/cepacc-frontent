import React, { useRef, useState, useEffect }  from "react";
import { Button, Checkbox, Slider } from "antd";
import { FiSearch, FiFilter }       from "react-icons/fi";
import { GrFormClose }              from "react-icons/gr";

import { 
    AppliedFiltersContainer,
    FilterApplied,
    OpenFiltersButton,
    FilterAppliedClose,
    OpenFilterContainer,
    FilterAppliedText,
    MainContainer,
    MainContent,
    SearchBox,
    SearchInput,
    FiltersModal,
    FiltersModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalTitle,
    ModalFilter,
    ModalFilterContainer,
    ModalFilterTitle,
} from "./style";

export default function Filters({handleSearchTerm, handleFilters}) {
    const searchInputRef = useRef(null);

    const [ searchFocus, setSearchFocus ] = useState(false);
    const [ filtersIsOpen, setFiltersIsOpen ] = useState(true);
    const [ appliedFilters, setAppliedFilters ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ filters, setFilters ] = useState({
        area: [],
        type: [],
        duration: [360, 1420],
        modality: []
    });

    function handleRemoveFilter(filter) {
        const filterIndex = filter.currentTarget.parentElement.dataset.index;

        setAppliedFilters(prev => prev.filter((_, index) => index !== parseInt(filterIndex)));
    }

    function handleSearchClick() {
        searchInputRef.current.focus();

        setSearchFocus(true);
    }

    function handleSubmitSearchTerm(event){
        event.preventDefault();
        searchInputRef.current.value = "";
        searchInputRef.current.blur();

        searchTerm && handleSearchTerm(searchTerm);
    }

    function handleFiltersModalOpen() {
        setFiltersIsOpen(prev => !prev);

        // used to prevent scroll on modal show
        if(filtersIsOpen){
            document.body.style.overflow = 'unset';
        }else{
            document.body.style.overflow = 'hidden';
        }
    }

    function handleSubmitFilters() {
        handleFilters(filters);
    }

    // DEBUG DEBUG DEBUG DEBUG DEBUG DEBUG DEBUG DEBUG DEBUG DEBUG 
    // useEffect(() => {
    //     console.log(filters)
    // }, [filters]);

    function handleChangeFilters(whichFilter, filterValue, checkboxStatus) {
        let currentFilter = filters[whichFilter];

        if(!checkboxStatus){
            currentFilter = currentFilter.filter(e => e !== filterValue);
        }else{
            currentFilter.push(filterValue);
        }

        setFilters(prev => ({...prev, [whichFilter]: currentFilter}));
    }

    const durationSliderMarks = {
        360: '360hrs',
        405: '',
        450: '',
        540: '',
        600: '',
        660: '',
        720: '',
        780: '',
        800: '',
        1080: '',
        1420: '1420hrs'
    }

    const checkBoxesFilters = {
        'area': [
            "Teologia",
            "Tecnologia Educacional",
            "Tecnologia",
            "Saúde",
            "Psicologia Aplicada",
            "Negócios",
            "Educação",
            "Direito",
            "Ciências Humanas",
        ],
        'tipo': [
            'Graduação',
            'Tecnólogo',
            'Preparatório',
            'Pós-Graduação',
            'Extensão',
            '2° Licenciatura',
        ],
        'modalidade': [
            "Presencial",
            "Semi-Presencial",
            "EAD",
        ]
    }

    return (
        <MainContainer>
            {
                filtersIsOpen &&
                <FiltersModal>
                    <FiltersModalContent>
                        <ModalHeader>
                            <ModalTitle>Filtros</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <ModalFilter>
                                <ModalFilterTitle>Área</ModalFilterTitle>
                                <ModalFilterContainer>
                                    {
                                        checkBoxesFilters.area.map((element, index) => (
                                            <Checkbox key={index} onChange={(e) => handleChangeFilters('area', e.target.value, e.target.checked)} value={element}>{element}</Checkbox>
                                        ))
                                    }
                                </ModalFilterContainer>
                            </ModalFilter>
                            <ModalFilter>
                                <ModalFilterTitle>Tipo</ModalFilterTitle>
                                <ModalFilterContainer>
                                    {
                                        checkBoxesFilters.tipo.map((element, index) => (
                                            <Checkbox key={index} onChange={(e) => handleChangeFilters('type', e.target.value, e.target.checked)} value={element}>{element}</Checkbox>
                                        ))
                                    }
                                </ModalFilterContainer>
                            </ModalFilter>
                            <ModalFilter>
                                <ModalFilterTitle>Duração</ModalFilterTitle>
                                <ModalFilterContainer style={{padding: '0 10px'}}>
                                    <Slider 
                                        range 
                                        tooltipVisible={true}
                                        step={null} 
                                        marks={durationSliderMarks}
                                        defaultValue={[360, 1420]}
                                        min={360}
                                        max={1420}
                                        onChange={(value) => {setFilters(prev => ({...prev, duration: value}))}}
                                    />
                                </ModalFilterContainer>
                            </ModalFilter>
                            <ModalFilter>
                                <ModalFilterTitle>Modalidade</ModalFilterTitle>
                                <ModalFilterContainer>
                                    {
                                        checkBoxesFilters.modalidade.map((element, index) => (
                                            <Checkbox key={index} onChange={(e) => handleChangeFilters('modality', e.target.value, e.target.checked)} value={element}>{element}</Checkbox>
                                        ))
                                    }
                                </ModalFilterContainer>
                            </ModalFilter>
                        </ModalBody>
                        <ModalFooter>
                            <a onClick={() => {}}>Limpar Filtros</a>
                            <div>
                                <Button onClick={handleFiltersModalOpen}>Cancelar</Button>
                                <Button onClick={handleSubmitFilters} type='primary'>OK</Button>
                            </div>
                        </ModalFooter>
                    </FiltersModalContent>
                </FiltersModal>
            }
            <MainContent>
                <SearchBox isFocus={searchFocus} onClick={handleSearchClick}>
                    <FiSearch 
                        type='submit'
                        size={35} 
                        color="#002756" 
                        onClick={event => handleSubmitSearchTerm(event)} 
                        cursor={'pointer'}/>
                    <form onSubmit={(event) => handleSubmitSearchTerm(event)}>
                        <SearchInput 
                            placeholder="Buscar um curso" 
                            ref={searchInputRef} onBlur={() => setSearchFocus(false)}
                            onChange={event => setSearchTerm(event.target.value)}
                        />
                    </form>
                </SearchBox>
                <OpenFilterContainer>
                    <OpenFiltersButton onClick={handleFiltersModalOpen}>
                        <FiFilter size={30} color="#002756"/>
                    </OpenFiltersButton>
                </OpenFilterContainer>
                <AppliedFiltersContainer>
                    {
                        appliedFilters.map((filter, index) => (
                            <FilterApplied key={index} data-index={index}>
                                <FilterAppliedText>{filter}</FilterAppliedText>
                                <FilterAppliedClose onClick={(event) => handleRemoveFilter(event)}>
                                    <GrFormClose size={30} color="#002756"/>
                                </FilterAppliedClose>
                            </FilterApplied>
                        ))
                    }
                </AppliedFiltersContainer>
            </MainContent>
        </MainContainer>
    )
}