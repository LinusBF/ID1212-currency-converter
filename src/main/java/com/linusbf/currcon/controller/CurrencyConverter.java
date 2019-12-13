package com.linusbf.currcon.controller;

import com.linusbf.currcon.model.Currency;

public class CurrencyConverter {
    public static double ConvertCurrency(double amount, Currency from, Currency to){
        double toBase = amount * from.getRate();
        return toBase * to.getRate();
    }
}
