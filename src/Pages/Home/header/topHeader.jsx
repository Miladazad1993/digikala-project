import React from 'react';
import GetData from '../../../Services/appServices';
import logo from '../../../Public/images/logo.svg';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ButtonGroup } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const TopHeader = () => {

    const { data } = GetData("header-pictures");

    if (!data) { return <p>please wait ...</p> }
    console.log("data =>", data);

    return (
        <>
            <img src={`http://localhost:1337${data[0].img.url}`} height="60px" width="100%" alt="تخفیف بگیر" />


            <div className="container-fluid mt-3">

                <div className='row '>

                    <div className='col-1 mt-2 ms-2 me-3 ' >
                        <img src={logo} alt="دیجی کالا" />
                    </div>


                    <Paper
                        className='col-5 mr-3 ms-auto'
                        component="form"
                        sx={{ p: '0px 2px', display: 'flex', alignItems: 'center', backgroundColor: 'rgb(240 , 240 , 241)' }}
                    >

                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="جستجو"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                    </Paper>


                    <ButtonGroup variant="text" className='border col-auto '>
                        <button className='btn-black'>
                            <LoginIcon className='reverseIcon' />
                            ورود
                        </button>
                        <button className='btn-black' >ثبت نام</button>
                    </ButtonGroup>
                    <i className="bi bi-cart col-1 text-center " style={{ fontSize: "25px", fontWeight: "bold" }}></i>
                </div >



            </div>


        </>
    );
}

export default TopHeader;