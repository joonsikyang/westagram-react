import React, {Component} from 'react'
import MainRightProfile from './MainRightProfile/MainRightProfile';
import MainRightStoryBox from './MainRightStoryBox/MainRightStoryBox';
import MainRightRecommendationBox from './MainRightRecommendationBox/MainRightRecommendationBox';
import MainRightAboutInstagram from './MainRightAboutInstagram/MainRightAboutInstagram';

export class Aside extends Component {
    render() {
        return (
            <div id="main-right">
                <MainRightProfile/>
                <MainRightStoryBox/>
                <MainRightRecommendationBox/>
                <MainRightAboutInstagram/>
            </div>
        )
    }
}

export default Aside
