package com.rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rest.model.BankAccount;
import com.rest.repo.AccountRepo;
@Service
public class AccountServiceImp implements AccountService {
	@Autowired
	private AccountRepo accountRepo;
	
	// SAVE THE ACCOUNT DETAILS 
	@Override
	public BankAccount saveAccount(BankAccount bankAccount) {
		BankAccount account = accountRepo.save(bankAccount);
		return account;
	}
	
	// RETRIEVE THE ACCOUNT DETAILS IF ACCOUNT NUMBER AND ACCOUNT NAME AND PASSWORD IS VALID 
	@Override
	public BankAccount getBankDetails(int accountNumber, String accountName, String password) {
		BankAccount account = accountRepo.findByAccountNumberAndAccountNameAndPassword(accountNumber,accountName,password);
		
		return account;
	}
	
	// IF THE ACCOUNT NUMBER AND ACCOUNT NAME AND PASSWORD IS VALID AND  THE AMOUNT IS DEPOSITED TO THAT ACCOUNT NUMBER 
	@Override
	public BankAccount deposit(int accountNumber, String accountName, String password, double amount) {
		BankAccount oldAccount = accountRepo.findByAccountNumberAndAccountNameAndPassword(accountNumber, accountName, password);
		if(oldAccount == null)
	        throw new IllegalArgumentException("Account not found or credentials are incorrect");
		double updatedAmount = oldAccount.getAmount()+amount;
		oldAccount.setAmount(updatedAmount);
		BankAccount account = accountRepo.save(oldAccount);
		return account;
	}
	
	// IF THE ACCOUNT NUMBER AND ACCOUNT NAME AND PASSWORD IS VALID AND THE AMOUNT IS WITHDRAWED TO THAT ACCOUNT NUMBER
	@Override
	public BankAccount withdraw(int accountNumber, String accountName, String password, double amount) {
		BankAccount oldAccount = accountRepo.findByAccountNumberAndAccountNameAndPassword(accountNumber, accountName, password);
		if(oldAccount == null)
	        throw new IllegalArgumentException("Account not found or credentials are incorrect");
		double updatedAmount = oldAccount.getAmount()-amount;
		if (updatedAmount < 0) {
	        throw new IllegalArgumentException("Insufficient balance");
	    }

		oldAccount.setAmount(updatedAmount);
		BankAccount account = accountRepo.save(oldAccount);
		return account;
	}
	
	// IF THE ACCOUNT NUMBER AND ACCOUNT NAME AND PASSWORD IS VALID AND THE GIVEN TRANSFER ACCOUNT NUMBER IS THERE  AND AMOUNT IS DEPOSITED TO TRANSFER ACCOUNT NUMBER  
	@Override
	public BankAccount transfer(int accountNumber, String accountName, String password, int accountNumber1, double amount1) {
	    // Withdraw funds from the sender's account
	    double previousAmount = amount1;
	    BankAccount account = withdraw(accountNumber, accountName, password, amount1);
	    
	    // Pass both the destination account number and the amount to deposit
	    BankAccount toAccount =depositTransfer(accountNumber1, previousAmount);
	    if(toAccount == null)
	    {
	    	deposit(accountNumber,accountName,password,amount1);
	    }
	    return account;
	}


	// IF THE ACCOUNT NUMBER IS AVAILABLE IN THE DATABASE AND THE AMOUNT IS UPDATED 
	@Override
	public BankAccount depositTransfer(int accountNumber1, double previousAmount) {
	    // Retrieve the target account details
	    BankAccount account = getTargAccountBankDetails(accountNumber1);
	    
	    // Check if the account exists
	    if (account == null) {
	        throw new IllegalArgumentException("Target account not found");
	    }
	    
	    // Perform the deposit operation
	    double updatedAmount = account.getAmount() + previousAmount;
	    account.setAmount(updatedAmount);
	    BankAccount updatedAccount = accountRepo.save(account);
	    
	    return updatedAccount;
	}

	// RETRIEVE THE BANK ACCOUNT DETAILS BASED ON THE ACCOUNT NUMBER 
	@Override
	public BankAccount getTargAccountBankDetails(int accountNumber) {
		BankAccount account1 = accountRepo.findByAccountNumber(accountNumber);
		return account1;
	}
	
	

	@Override
	public void deleteAccount(int accountNumber) {
	accountRepo.deleteById(accountNumber);
		
	}

	@Override
	public BankAccount closeAccount(int accountNumber, String accountName, String password) {
		BankAccount account = accountRepo.findByAccountNumberAndAccountNameAndPassword(accountNumber, accountName, password);
		return account;
	}

	@Override
	public BankAccount updateAccountDetails(BankAccount bankAccount,int accountNumber) {
		BankAccount oldRecord = accountRepo.findByAccountNumber(accountNumber);
		oldRecord.setAccountName(bankAccount.getAccountName());
		oldRecord.setPassword(bankAccount.getPassword());
		oldRecord.setAmount(bankAccount.getAmount());
		oldRecord.setAddress(bankAccount.getAddress());
		oldRecord.setMobileNumber(bankAccount.getMobileNumber());
		BankAccount result = accountRepo.save(oldRecord);
		return result;
	}
}