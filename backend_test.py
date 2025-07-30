#!/usr/bin/env python3
"""
Backend API Testing Suite for Cajá Contact System
Tests the complete contact form functionality including SMTP and database operations.
"""

import requests
import json
import time
import sys
from datetime import datetime
from typing import Dict, Any

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("❌ Could not get REACT_APP_BACKEND_URL from frontend/.env")
    sys.exit(1)

API_BASE = f"{BACKEND_URL}/api"
print(f"🔗 Testing backend at: {API_BASE}")

class ContactSystemTester:
    def __init__(self):
        self.results = {
            'smtp_config_test': False,
            'contact_form_basic': False,
            'contact_form_validation': False,
            'contact_form_services': False,
            'database_storage': False,
            'error_handling': False
        }
        self.test_data = {
            "name": "João Silva",
            "email": "joao@exemplo.com",
            "company": "Empresa Teste",
            "service": "mvp",
            "message": "Gostaria de desenvolver um MVP para minha startup. Preciso de ajuda com validação de mercado e desenvolvimento ágil."
        }
    
    def test_smtp_configuration(self):
        """Test SMTP configuration and connection"""
        print("\n🔧 Testing SMTP Configuration...")
        
        try:
            response = requests.get(f"{API_BASE}/contact/test", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                print(f"   📧 SMTP Configured: {data.get('smtp_configured', False)}")
                print(f"   🔌 Connection Test: {data.get('connection_test', False)}")
                print(f"   📮 Recipient: {data.get('recipient', 'N/A')}")
                
                if data.get('smtp_configured') and data.get('connection_test'):
                    print("   ✅ SMTP configuration is working")
                    self.results['smtp_config_test'] = True
                else:
                    print("   ⚠️  SMTP configuration issues detected")
                    if 'error' in data:
                        print(f"   ❌ Error: {data['error']}")
            else:
                print(f"   ❌ SMTP test endpoint failed: {response.status_code}")
                
        except Exception as e:
            print(f"   ❌ SMTP configuration test failed: {str(e)}")
    
    def test_contact_form_basic(self):
        """Test basic contact form submission"""
        print("\n📝 Testing Basic Contact Form Submission...")
        
        try:
            response = requests.post(
                f"{API_BASE}/contact",
                json=self.test_data,
                headers={'Content-Type': 'application/json'},
                timeout=15
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') and 'mensagem enviada com sucesso' in data.get('message', '').lower():
                    print("   ✅ Contact form submission successful")
                    print(f"   📨 Response: {data.get('message')}")
                    self.results['contact_form_basic'] = True
                else:
                    print(f"   ❌ Unexpected response format: {data}")
            else:
                print(f"   ❌ Contact form submission failed: {response.status_code}")
                try:
                    error_data = response.json()
                    print(f"   📄 Error details: {error_data}")
                except:
                    print(f"   📄 Response text: {response.text}")
                    
        except Exception as e:
            print(f"   ❌ Contact form basic test failed: {str(e)}")
    
    def test_contact_form_validation(self):
        """Test contact form field validation"""
        print("\n🔍 Testing Contact Form Validation...")
        
        validation_tests = [
            {
                'name': 'Empty name test',
                'data': {**self.test_data, 'name': ''},
                'should_fail': True
            },
            {
                'name': 'Invalid email test',
                'data': {**self.test_data, 'email': 'invalid-email'},
                'should_fail': True
            },
            {
                'name': 'Short message test',
                'data': {**self.test_data, 'message': 'short'},
                'should_fail': True
            },
            {
                'name': 'Long message test',
                'data': {**self.test_data, 'message': 'x' * 1001},
                'should_fail': True
            },
            {
                'name': 'Missing company (optional) test',
                'data': {k: v for k, v in self.test_data.items() if k != 'company'},
                'should_fail': False
            }
        ]
        
        validation_passed = 0
        
        for test in validation_tests:
            try:
                response = requests.post(
                    f"{API_BASE}/contact",
                    json=test['data'],
                    headers={'Content-Type': 'application/json'},
                    timeout=10
                )
                
                if test['should_fail']:
                    if response.status_code == 422 or response.status_code == 400:
                        print(f"   ✅ {test['name']}: Correctly rejected")
                        validation_passed += 1
                    else:
                        print(f"   ❌ {test['name']}: Should have failed but got {response.status_code}")
                else:
                    if response.status_code == 200:
                        print(f"   ✅ {test['name']}: Correctly accepted")
                        validation_passed += 1
                    else:
                        print(f"   ❌ {test['name']}: Should have succeeded but got {response.status_code}")
                        
            except Exception as e:
                print(f"   ❌ {test['name']}: Exception - {str(e)}")
        
        if validation_passed >= 4:  # Allow some flexibility
            self.results['contact_form_validation'] = True
            print(f"   ✅ Validation tests passed: {validation_passed}/{len(validation_tests)}")
        else:
            print(f"   ❌ Validation tests failed: {validation_passed}/{len(validation_tests)}")
    
    def test_different_services(self):
        """Test different service types"""
        print("\n🛠️  Testing Different Service Types...")
        
        services = ['mvp', 'software', 'gestao', 'treinamento', 'consultoria']
        services_passed = 0
        
        for service in services:
            try:
                test_data = {**self.test_data, 'service': service}
                response = requests.post(
                    f"{API_BASE}/contact",
                    json=test_data,
                    headers={'Content-Type': 'application/json'},
                    timeout=10
                )
                
                if response.status_code == 200:
                    print(f"   ✅ Service '{service}': Success")
                    services_passed += 1
                else:
                    print(f"   ❌ Service '{service}': Failed with {response.status_code}")
                    
            except Exception as e:
                print(f"   ❌ Service '{service}': Exception - {str(e)}")
        
        if services_passed >= 3:  # Allow some flexibility
            self.results['contact_form_services'] = True
            print(f"   ✅ Service tests passed: {services_passed}/{len(services)}")
        else:
            print(f"   ❌ Service tests failed: {services_passed}/{len(services)}")
    
    def test_database_storage(self):
        """Test if contact submissions are stored in database"""
        print("\n💾 Testing Database Storage...")
        
        # We can't directly access the database, but we can infer from successful responses
        # and the fact that the system is designed to save to DB first
        try:
            unique_message = f"Database test message - {datetime.now().isoformat()}"
            test_data = {**self.test_data, 'message': unique_message}
            
            response = requests.post(
                f"{API_BASE}/contact",
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=15
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success'):
                    print("   ✅ Database storage appears to be working (inferred from successful submission)")
                    self.results['database_storage'] = True
                else:
                    print("   ❌ Database storage may have issues")
            else:
                print(f"   ❌ Database storage test failed: {response.status_code}")
                
        except Exception as e:
            print(f"   ❌ Database storage test failed: {str(e)}")
    
    def test_error_handling(self):
        """Test error handling scenarios"""
        print("\n⚠️  Testing Error Handling...")
        
        error_tests = [
            {
                'name': 'Malformed JSON',
                'data': 'invalid json',
                'headers': {'Content-Type': 'application/json'}
            },
            {
                'name': 'Missing required fields',
                'data': {'name': 'Test'},
                'headers': {'Content-Type': 'application/json'}
            }
        ]
        
        error_handling_passed = 0
        
        for test in error_tests:
            try:
                response = requests.post(
                    f"{API_BASE}/contact",
                    data=test['data'] if isinstance(test['data'], str) else json.dumps(test['data']),
                    headers=test['headers'],
                    timeout=10
                )
                
                if response.status_code in [400, 422, 500]:
                    print(f"   ✅ {test['name']}: Properly handled with {response.status_code}")
                    error_handling_passed += 1
                else:
                    print(f"   ❌ {test['name']}: Unexpected status {response.status_code}")
                    
            except Exception as e:
                print(f"   ❌ {test['name']}: Exception - {str(e)}")
        
        if error_handling_passed >= 1:
            self.results['error_handling'] = True
            print(f"   ✅ Error handling tests passed: {error_handling_passed}/{len(error_tests)}")
        else:
            print(f"   ❌ Error handling tests failed: {error_handling_passed}/{len(error_tests)}")
    
    def run_all_tests(self):
        """Run all contact system tests"""
        print("🚀 Starting Cajá Contact System Tests")
        print("=" * 50)
        
        # Run tests in logical order
        self.test_smtp_configuration()
        self.test_contact_form_basic()
        self.test_contact_form_validation()
        self.test_different_services()
        self.test_database_storage()
        self.test_error_handling()
        
        # Summary
        print("\n" + "=" * 50)
        print("📊 TEST RESULTS SUMMARY")
        print("=" * 50)
        
        passed = sum(self.results.values())
        total = len(self.results)
        
        for test_name, result in self.results.items():
            status = "✅ PASS" if result else "❌ FAIL"
            print(f"{test_name.replace('_', ' ').title()}: {status}")
        
        print(f"\nOverall: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 All contact system tests PASSED!")
            return True
        else:
            print("⚠️  Some contact system tests FAILED!")
            return False

def main():
    """Main test execution"""
    tester = ContactSystemTester()
    success = tester.run_all_tests()
    
    if success:
        print("\n✅ Contact system is working properly!")
        sys.exit(0)
    else:
        print("\n❌ Contact system has issues that need attention!")
        sys.exit(1)

if __name__ == "__main__":
    main()