package com.rest.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rest.model.BankAccount;
@Repository
public interface AccountRepo extends JpaRepository<BankAccount, Integer> {

	BankAccount findByAccountNumberAndAccountNameAndPassword(int accountNumber, String accountName, String password);

	BankAccount findByAccountNumber(int accountNumber);

	

}
