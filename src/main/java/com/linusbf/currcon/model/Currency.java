package com.linusbf.currcon.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Currency {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private double rate;
    private String name;
    protected Currency(){}
    public Currency(double rate, String name) {
        this.rate = rate;
        this.name = name;}
    public double getRate() {return rate;}
    public void setRate(double rate) {this.rate = rate;}
    public String getName() {return name;}
    public void setName(String name) {this.name = name;}
}
