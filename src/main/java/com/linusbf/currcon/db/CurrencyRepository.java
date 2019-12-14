package com.linusbf.currcon.db;
import com.linusbf.currcon.model.Currency;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CurrencyRepository extends CrudRepository<Currency, Long> {
    @Transactional
    List<Currency> findByName(String name);
    @Transactional
    Currency findById(long id);
}
