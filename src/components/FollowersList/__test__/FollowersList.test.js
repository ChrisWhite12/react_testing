import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FollowersList from '../FollowersList'
import axios from 'axios'

//all axios functions return undefined
//set functions to desired responses
jest.mock('axios')

const axiosData = {
    data: {
            results: [
                {
                    name: {
                        first: 'asdf',
                        last: 'wef'
                    },
                    picture: {
                        large: 'https://randomuser.me/api/portraits/men/33'
                    },
                    login: {
                        username: 'erg'
                    } 
                },
                {
                    name: {
                        first: 'asasdfdf',
                        last: 'weasdff'
                    },
                    picture: {
                        large: 'https://randomuser.me/api/portraits/men/32'
                    },
                    login: {
                        username: 'asderg'
                    } 
                }
            ]
        }
}

const MockFollowersList = () => {
    return(
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe('FollowersList tests', () => {

    it('renders the FollowersList', async () => {
        axios.get.mockResolvedValue(axiosData)

        render(<MockFollowersList />)
        const followerDiv = await screen.findByTestId('followerItem0')
        expect(followerDiv).toBeInTheDocument() 
    
    
    })
    
    it('should render multiple followers', async () => {
        axios.get.mockResolvedValue(axiosData)
        
        render(<MockFollowersList />)
        const followerItems = await screen.findAllByTestId(/followerItem/i)
        // screen.debug()
        expect(followerItems.length).toBe(2)
    }) 
})