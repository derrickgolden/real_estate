
import LondonApt from './images/aptLondon.png'
import gilliardApt from './images/gilliardApt.png'
import studioApt from './images/studioApt.png'

import avator from './avators/avator.svg'

import {PiSquaresFour} from 'react-icons/pi'
import {BiBath, BiBed} from 'react-icons/bi'


export const featuredAptDetails = [
    {
    locationInfor: 
        {img: LondonApt, avator: avator, address: 'Knightbridge'},
    details: {price: "$2,500",
        title: "Apartment London"},
    specsInfor: [{icon: BiBed, no: "2", title: "bedrooms"}, 
        {icon: BiBath, no: "2", title: "bathrooms"}, 
        {icon: PiSquaresFour, no: "1776", title: "square ft"}]
    },
    {
    locationInfor: 
        {img: gilliardApt, avator: avator, address: 'Belmont Gardens, chicago'},
    details: {price: "$30,000",
        title: "Studio Apartment"},
    specsInfor: [{icon: BiBed, no: "3", title: "bedrooms"}, 
        {icon: BiBath, no: "2", title: "bathrooms"}, 
        {icon: PiSquaresFour, no: "2500", title: "square ft"}]
    },
    {
    locationInfor: 
        {img: studioApt, avator: avator, address: 'timber yard, birmingham city center,'},
    details: {price: "$379,000",
        title: "Galliard Homes Apartment"},
    specsInfor: [{icon: BiBed, no: "2", title: "bedrooms"}, 
        {icon: BiBath, no: "1", title: "bathrooms"}, 
        {icon: PiSquaresFour, no: "1041", title: "square ft"}]
    },
]