package com.linusbf.currcon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
public class CurrencyController {
    @Autowired
    private CurrencyRepository repository;

    @RequestMapping(method=GET, path="/currency")
    public Iterable<Currency> currencyGetAll(){
        return repository.findAll();
    }

    @RequestMapping(method=GET, path="/currency/{name}")
    public Currency currencyGet(@PathVariable(value="name") String name){
        return repository.findByName(name).get(0);
    }

    @RequestMapping(method=POST, path="/currency", produces = "application/json", consumes = "application/json")
    public Currency currencyPost(@RequestBody Currency curr){
        repository.save(curr);
        return curr;
    }

    @RequestMapping(method=POST, path="/convert", produces = "application/json", consumes = "application/json")
    public double convert(@RequestBody ConvertBody convert){
        Currency from = repository.findByName(convert.getFrom()).get(0);
        Currency to = repository.findByName(convert.getTo()).get(0);
        return CurrencyConverter.ConvertCurrency(convert.getAmount(), from, to);
    }
}
