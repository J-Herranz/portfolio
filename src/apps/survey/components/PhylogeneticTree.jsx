import { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageContext.js'
import { ThemeContext } from '../../../context/ThemeContext.js'
import { PhylogeneticTree_entry } from './PhylogeneticTree_entry.jsx'
import PropTypes from 'prop-types'
import '../styles/phylogeneticTree.css'

import img_caracal from '/assets/survey_images/species_icons/caracal.png';
import img_cat from '/assets/survey_images/species_icons/cat.png';
import img_cheetah from '/assets/survey_images/species_icons/cheetah.png';
import img_cloudedLeopard from '/assets/survey_images/species_icons/cloudedLeopard.png';
import img_cougar from '/assets/survey_images/species_icons/cougar.png';
import img_jaguar from '/assets/survey_images/species_icons/jaguar.png';
import img_leopard from '/assets/survey_images/species_icons/leopard.png';
import img_lion from '/assets/survey_images/species_icons/lion.png';
import img_lynx from '/assets/survey_images/species_icons/lynx.png';
import img_ocelot from '/assets/survey_images/species_icons/ocelot.png';
import img_serval from '/assets/survey_images/species_icons/serval.png';
import img_snowLeopard from '/assets/survey_images/species_icons/snowLeopard.png';
import img_tiger from '/assets/survey_images/species_icons/tiger.png';

function PhylogeneticTree({ setCardSpecies }) {
  const { t } = useContext(LanguageContext);
  const { darkmodeBool } = useContext(ThemeContext);


  function leftBorderClass() {
    return `left-border ${darkmodeBool ? 'dark' : 'light'}`
  }

  return (
    <div className="tree" style={darkmodeBool ? { color: '#0b0b0b', borderColor: '#0b0b0b' } : { color: '#f4f4f4', borderColor: '#f4f4f4' }}>
      <div className='tree-vertical-text-div no-padding-top'>
        <p className='tree-vertical-text'>Felidae</p>
        <div className={leftBorderClass()}>
          <div className='tree-vertical-text-div no-padding-top no-padding-left'>
            <p className='tree-vertical-text'>Pantherinae</p>
            <div className={leftBorderClass()}>
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Neofelis</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry name={t?.survey?.species?.cloudedLeopard?.name} binomialNomenclature={t?.survey?.species?.cloudedLeopard?.binomialNomenclature} img={img_cloudedLeopard} setCardSpecies={setCardSpecies} />
                  <PhylogeneticTree_entry />
                </div>
              </div>
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Panthera</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry name={t?.survey?.species?.tiger?.name} binomialNomenclature={t?.survey?.species?.tiger?.binomialNomenclature} img={img_tiger} setCardSpecies={setCardSpecies} />
                  <PhylogeneticTree_entry name={t?.survey?.species?.snowLeopard?.name} binomialNomenclature={t?.survey?.species?.snowLeopard?.binomialNomenclature} img={img_snowLeopard} setCardSpecies={setCardSpecies} />
                  <PhylogeneticTree_entry name={t?.survey?.species?.jaguar?.name} binomialNomenclature={t?.survey?.species?.jaguar?.binomialNomenclature} img={img_jaguar} setCardSpecies={setCardSpecies} />
                  <PhylogeneticTree_entry name={t?.survey?.species?.lion?.name} binomialNomenclature={t?.survey?.species?.lion?.binomialNomenclature} img={img_lion} setCardSpecies={setCardSpecies} />
                  <PhylogeneticTree_entry name={t?.survey?.species?.leopard?.name} binomialNomenclature={t?.survey?.species?.leopard?.binomialNomenclature} img={img_leopard} setCardSpecies={setCardSpecies} />
                </div>
              </div>
            </div>

          </div>

          <div className='tree-vertical-text-div no-padding-bottom'>
            <p className='tree-vertical-text'>Felinae</p>
            <div className={leftBorderClass()}>
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Leptailurus</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry name={t?.survey?.species?.serval?.name} binomialNomenclature={t?.survey?.species?.serval?.binomialNomenclature} img={img_serval} setCardSpecies={setCardSpecies} />
                </div>
              </div>
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Caracal</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry name={t?.survey?.species?.caracal?.name} binomialNomenclature={t?.survey?.species?.caracal?.binomialNomenclature} img={img_caracal} setCardSpecies={setCardSpecies} />
                  <PhylogeneticTree_entry />
                </div>
              </div>
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Leopardus</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry name={t?.survey?.species?.ocelot?.name} binomialNomenclature={t?.survey?.species?.ocelot?.binomialNomenclature} img={img_ocelot} setCardSpecies={setCardSpecies} />
                  <PhylogeneticTree_entry />
                </div>
              </div>
              {/*
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Pardofelis</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry />
                </div>
              </div>
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Catopuma</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry />
                </div>
              </div>
              */}
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Lynx</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry name={t?.survey?.species?.lynx?.name} binomialNomenclature={t?.survey?.species?.lynx?.binomialNomenclature} img={img_lynx} setCardSpecies={setCardSpecies} />
                </div>
              </div>
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Acinonyx</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry name={t?.survey?.species?.cheetah?.name} binomialNomenclature={t?.survey?.species?.cheetah?.binomialNomenclature} img={img_cheetah} setCardSpecies={setCardSpecies} />
                </div>
              </div>
              {/*
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Herpailurus</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry />
                </div>
              </div>
              */}
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Puma</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry name={t?.survey?.species?.cougar?.name} binomialNomenclature={t?.survey?.species?.cougar?.binomialNomenclature} img={img_cougar} setCardSpecies={setCardSpecies} />
                </div>
              </div>
              {/*
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Otocolobus</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry />
                </div>
              </div>
              <div className='tree-vertical-text-div'>
                <p className='tree-vertical-text'>Prionailurus</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry />
                </div>
              </div>
              */}
              <div className='tree-vertical-text-div no-padding-bottom'>
                <p className='tree-vertical-text'>Felis</p>
                <div className={leftBorderClass()}>
                  <PhylogeneticTree_entry name={t?.survey?.species?.cat?.name} binomialNomenclature={t?.survey?.species?.cat?.binomialNomenclature} img={img_cat} setCardSpecies={setCardSpecies} />
                  <PhylogeneticTree_entry />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PhylogeneticTree.propTypes = {
  setCardSpecies: PropTypes.func
}

export { PhylogeneticTree }