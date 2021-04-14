import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {SearchArea, PageArea} from './styled';
import useApi from '../../helpers/OlxApi';
import {PageContainer} from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';


const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(()=> {
        const getStates = async() => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    useEffect(()=> {
        const getCategories = async() => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    useEffect(()=> {
        const getRecentAds = async() => {
            const json = await api.getAds({
                sort:'desc', 
                limit:8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, []);


    return (
        <>
        <SearchArea>
            <PageContainer>
                <div className="searchBox">
                    <form method="GET" action="/ads">
                        
                        <input type="text" name="q" placeholder="Estou procurando por..."/>
                        <select name="state">
                            {stateList.map((i, k) =>
                            <option key={k} value={i.name}>{i.name}</option>)}
                          
                        </select>
                        
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path fill="currentColor" 
                        d="M16.84 15.78l4.69 4.69a.75.75 0 0 1-1.06 1.06l-4.69-4.69a8.25 8.25 0 1 1 1.06-1.06zm-1.51-.564a6.75 6.75 0 1 0-.113.113.759.759 0 0 1 .112-.113z" 
                        fill-rule="evenodd"></path></svg>
                            </button>
                        
                    </form>

                </div>
                
                <div className="categoryList">
                    {categories.map((i, k) =>
                    <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                        <img src={i.img} alt=""/>
                        <span>{i.name}</span>
                    </Link>
                    )}

                </div>
            </PageContainer>
        </SearchArea>
      
        <PageContainer>
            <PageArea>
            <h2>Anúncios Recentes </h2>
            <div className="list">
                {adList.map((i, k) => 
                <AdItem key={k} data={i}/>
                )}
           </div>
           <Link to="/ads" className="seeAllLink">Ver todos</Link>
           <hr/>
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </PageArea>
        </PageContainer>
        </>
    );
}
export default Page;