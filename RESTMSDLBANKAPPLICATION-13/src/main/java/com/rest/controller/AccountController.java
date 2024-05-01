package com.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rest.model.BankAccount;
import com.rest.service.AccountService;
@CrossOrigin(origins= {"*"})
@RestController
public class AccountController {
	@Autowired
	private AccountService accountService;
	
	@PostMapping("/save")
	public String saveAccountDetails(@RequestBody BankAccount bankAccount)
	{
		BankAccount bankAccount1 = accountService.saveAccount(bankAccount);
		String message;
		if(bankAccount1 != null)
		{
			message = "DATA SAVED SUCCESSSFULLY";
		}
		else
		{
			message = "DATA FAILED";
		}
		return message;
	}
	
	@GetMapping("/get/{accountNumber}/{accountName}/{password}")
	public BankAccount getAccountDetails(@PathVariable int accountNumber, @PathVariable String accountName, @PathVariable String password) {
	    BankAccount account = accountService.getBankDetails(accountNumber, accountName, password);
	    return account;
	}

	
	@PostMapping("/deposit/{accountNumber}")
	public BankAccount depositAccountDetails(@PathVariable int accountNumber,@RequestBody BankAccount bankAccount)
	{
		BankAccount account = accountService.deposit(accountNumber, bankAccount.getAccountName(), bankAccount.getPassword(),bankAccount.getAmount());
		return account;	
	}
	
	@PostMapping("/withdraw/{accountNumber}")
	public BankAccount withdrawlAccountDetails(@PathVariable int accountNumber,@RequestBody BankAccount bankAccount)
	{
		BankAccount account = accountService.withdraw(accountNumber, bankAccount.getAccountName(), bankAccount.getPassword(),bankAccount.getAmount());
		return account;
	}
	
	@PostMapping("/transfer/{accountNumber}/{accountNumber1}/{amount}")
	public BankAccount transferAccountDetails(@PathVariable int accountNumber , @RequestBody BankAccount bankAccount,@PathVariable int accountNumber1,@PathVariable double amount)
	{
		
		BankAccount account = accountService.transfer(accountNumber,bankAccount.getAccountName(),bankAccount.getPassword(), accountNumber1,amount);
		return account;
	}
	
	@PostMapping("/close/{accountNumber}")
	public String closeAccountDetails(@PathVariable int accountNumber,@RequestBody BankAccount bankAccount)
	{
		BankAccount account = accountService.closeAccount(accountNumber, bankAccount.getAccountName(), bankAccount.getPassword());
		String message = null;
		if(account != null)
		{
			message =account.getAccountNumber()+" IS CLOSED ";
		}
		return message;
	}
	@DeleteMapping("/deleteCustomer/{accountNumber}")
	public void deleteAccountDetails(@PathVariable int accountNumber)
	{
		accountService.deleteAccount(accountNumber); 
	}
	@PutMapping("/update/{accountNumber}")
	public BankAccount updateBankAccount(@RequestBody BankAccount bankAccount,@PathVariable int accountNumber)
	{
		BankAccount account = accountService.updateAccountDetails(bankAccount,accountNumber);
		return account;
	}
}
