package com.calendarbackend.calendarbackend.objects;

import com.poiji.annotation.ExcelCell;
import com.poiji.annotation.ExcelCellName;

public class EventDetails {

    @ExcelCellName("Fest Name")
    private String title;
    @ExcelCellName("Mode")
    private String mode;
    @ExcelCellName("Registration_fee")
    private String fee;
    @ExcelCellName("Start Date")
    private String start;
    @ExcelCellName("Register_link")
    private String url;
    @ExcelCellName("Image_link")
    private String imgurl;

    //Getters
    public String getTitle() {
        return this.title;
    }
    public String getImgurl() {
        return this.imgurl;
    }
    public String getMode() {
        return this.mode;
    }

    public String getFee() {
        return this.fee;
    }

    public String getUrl() {
        return this.url;
    }

    public String getDate(){

        return this.start;
    }


    //Setters
    public void setImgurl(String imgurl) {
        this.imgurl = imgurl;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }

    public void setFee(String fee) {
        this.fee = fee;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setDate(String Date){

        this.start = Date;
    }
}
