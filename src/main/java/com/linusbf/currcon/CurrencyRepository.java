package com.linusbf.currcon;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface CurrencyRepository extends CrudRepository<Currency, Long> {
    List<Currency> findByName(String name);
    Currency findById(long id);
}
