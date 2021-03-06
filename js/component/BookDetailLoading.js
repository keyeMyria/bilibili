/**
 * @flow
 * 详情页的loading界面
 */
import {inject, observer} from "mobx-react";
import {View,Image, Text,TouchableOpacity} from 'react-native';
import {BaseImage} from "../base";
import React from "react";
import {style} from "../page/book/Styles";
import {BaseString,BaseContainer} from '../base';
import {GifLoading, Loading} from "../base/BaseLoading";
import {scaleSize} from "../utils/ScreenUtils";

@inject('baseTheme')
@observer
export  class BookDetailLoading extends React.Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.brightBackGroundColor = this.props.baseTheme.brightBackGroundColor;
        this.brightDefaultColor= this.props.baseTheme.brightDefaultColor;
        this.brightNavTextColor= this.props.baseTheme.brightNavTextColor;
        this.brightNavBackGroundColor = this.props.baseTheme.brightNavBackGroundColor;
        this.brightTextColor = this.props.baseTheme.brightTextColor
    }

    render(){
        return(
            <BaseContainer
                navBar={null}>

                <Loading/>

                <View style={style.bookDetailViewTop}>
                    <View style={[style.bookDetailViewTopLeftImg,{ backgroundColor:this.brightDefaultColor,  height:scaleSize(300),shadowColor: this.brightDefaultColor}]}/>
                    <View style={style.bookDetailViewTopTextView}>
                        <View style={[style.bookDetailViewTopRight,{ backgroundColor:this.brightDefaultColor}]}/>
                        <View style={{flexDirection:'row',height:40,alignItems:'center'}}>
                            <View style={[style.scoreLeft,{ backgroundColor:this.brightDefaultColor}]}/>
                            {BaseString.BOOK_TOP_CLASS_TYPE.map((item,i)=>{
                                return(
                                    <Image key={i} source={BaseImage.my_evaluate_star_dark} style={style.score}/>
                                )
                            })}
                        </View>
                        <View style={{flexDirection:'row',height:20,alignItems:'center'}}>
                            <View style={[style.scoreLeft,{width:50,backgroundColor:this.brightDefaultColor}]}/>
                            <View style={[style.scoreLeft,{width:50,backgroundColor:this.brightDefaultColor}]}/>
                        </View>
                        <View style={[style.scoreLeft,{width:WIDTH/2-10,marginTop:15, backgroundColor:this.brightDefaultColor}]}/>
                        <View style={[style.scoreLeft,{width:WIDTH/2-40,marginTop:15, backgroundColor:this.brightDefaultColor}]}/>
                        <View style={[style.scoreLeft,{width:WIDTH/2-10,marginTop:15, backgroundColor:this.brightDefaultColor}]}/>
                    </View>
                </View>
                <View style={style.bookDetailViewBottomView}>

                    <View style={{width:WIDTH-60,flexDirection:'row'}}>
                        {BaseString.BOOK_DETAIL_CLASS.map((item,i)=>{
                            return(
                                <View
                                    key={i}
                                    style={style.bookDetailViewBottomTitle}>
                                    <Text style={[style.bookDetailViewBottomTitleStyle,{ color:this.brightTextColor}]}>{item.title}</Text>
                                </View>
                            )
                        })}
                    </View>

                    <View style={[style.bookLoadBottomView,{width:WIDTH-60}]}/>

                </View>

                <View style={style.IntroductionView}>
                    <Text style={[style.IntroductionTitle,{ color:this.brightNavTextColor}]}>{BaseString.INTRODUCTION}</Text>
                    <View style={[style.IntroductionViewItem,{backgroundColor:this.brightDefaultColor}]}/>
                    <View style={[style.IntroductionViewItem,{width:WIDTH-80, backgroundColor:this.brightDefaultColor}]}/>
                    <View style={[style.IntroductionViewItem,{width:WIDTH-100,backgroundColor:this.brightDefaultColor}]}/>
                    <View style={[style.IntroductionViewItem,{width:WIDTH-100,backgroundColor:this.brightDefaultColor}]}/>
                </View>

                <BookDetailBottomView/>
            </BaseContainer>
        )
    }
}

@inject('baseTheme')
@observer
export class BookDetailBottomView extends React.Component{

    render(){

        return(
            <View style={[style.bookBottomView,{ backgroundColor:this.props.baseTheme.brightNavBackGroundColor,}]}>
                <View style={style.ChaseView}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={this.props.addBookcase}
                        style={style.dotChaseView}>
                        <Text style={[style.dotChaseTitle,{color:'#fff'}]}>+ 追更新</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.ChaseView}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={this.props.startRead}
                        style={[style.dotChaseView,{backgroundColor:'red'}]}>
                        <Text style={[style.dotChaseTitle,{color:'#FFF'}]}>开始阅读</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}
