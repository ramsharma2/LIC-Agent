"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp, Shield, Users, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CalculatorInputs {
  age: string;
  monthlyIncome: string;
  dependents: string;
  existingLoans: string;
  lifeGoals: string;
  riskTolerance: string;
}

interface CalculationResult {
  recommendedCoverage: number;
  termPlan: number;
  endowmentPlan: number;
  ulipPlan: number;
  breakdown: {
    incomeReplacement: number;
    debtCoverage: number;
    futureGoals: number;
    emergencyFund: number;
  };
}

export function CoverageCalculator() {
  const { t } = useLanguage();
  const [inputs, setInputs] = useState<CalculatorInputs>({
    age: "",
    monthlyIncome: "",
    dependents: "",
    existingLoans: "",
    lifeGoals: "",
    riskTolerance: "moderate"
  });
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const calculateCoverage = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const age = parseInt(inputs.age) || 0;
      const monthlyIncome = parseInt(inputs.monthlyIncome) || 0;
      const dependents = parseInt(inputs.dependents) || 0;
      const existingLoans = parseInt(inputs.existingLoans) || 0;
      const lifeGoals = parseInt(inputs.lifeGoals) || 0;

      // Coverage calculation logic based on industry standards
      const annualIncome = monthlyIncome * 12;
      const incomeReplacement = annualIncome * Math.max(10, 65 - age); // Income replacement till retirement
      const debtCoverage = existingLoans;
      const futureGoals = lifeGoals;
      const emergencyFund = monthlyIncome * 6; // 6 months emergency fund
      const dependentMultiplier = 1 + (dependents * 0.2); // 20% more per dependent

      const baseCoverage = (incomeReplacement + debtCoverage + futureGoals + emergencyFund) * dependentMultiplier;
      
      // Risk tolerance adjustment
      const riskMultiplier = inputs.riskTolerance === "conservative" ? 1.2 : 
                           inputs.riskTolerance === "aggressive" ? 0.8 : 1.0;
      
      const recommendedCoverage = Math.round(baseCoverage * riskMultiplier);

      // Plan recommendations (approximate distribution)
      const termPlan = Math.round(recommendedCoverage * 0.7); // 70% term insurance
      const endowmentPlan = Math.round(recommendedCoverage * 0.2); // 20% endowment
      const ulipPlan = Math.round(recommendedCoverage * 0.1); // 10% ULIP

      setResult({
        recommendedCoverage,
        termPlan,
        endowmentPlan,
        ulipPlan,
        breakdown: {
          incomeReplacement: Math.round(incomeReplacement),
          debtCoverage,
          futureGoals,
          emergencyFund
        }
      });
      setIsCalculating(false);
    }, 1500);
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`;
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(0)}K`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  const resetCalculator = () => {
    setInputs({
      age: "",
      monthlyIncome: "",
      dependents: "",
      existingLoans: "",
      lifeGoals: "",
      riskTolerance: "moderate"
    });
    setResult(null);
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-gradient-to-br from-licBlue/5 to-licGold/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="bg-licGold/10 text-licGold hover:bg-licGold/20 mb-4">
            {t('calculator.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('calculator.title')} <span className="text-licBlue">{t('calculator.titleAccent')}</span>
          </h2>
          <p className="text-gray-600 text-lg">
            {t('calculator.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-licBlue" />
                {t('calculator.formTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">{t('calculator.age')}</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder={t('calculator.agePlaceholder')}
                    value={inputs.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    min="18"
                    max="65"
                  />
                </div>
                <div>
                  <Label htmlFor="monthlyIncome">{t('calculator.monthlyIncome')}</Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    placeholder={t('calculator.incomePlaceholder')}
                    value={inputs.monthlyIncome}
                    onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dependents">{t('calculator.dependents')}</Label>
                  <Input
                    id="dependents"
                    type="number"
                    placeholder={t('calculator.dependentsPlaceholder')}
                    value={inputs.dependents}
                    onChange={(e) => handleInputChange('dependents', e.target.value)}
                    min="0"
                    max="10"
                  />
                </div>
                <div>
                  <Label htmlFor="existingLoans">{t('calculator.existingLoans')}</Label>
                  <Input
                    id="existingLoans"
                    type="number"
                    placeholder={t('calculator.loansPlaceholder')}
                    value={inputs.existingLoans}
                    onChange={(e) => handleInputChange('existingLoans', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="lifeGoals">{t('calculator.lifeGoals')}</Label>
                <Input
                  id="lifeGoals"
                  type="number"
                  placeholder={t('calculator.goalsPlaceholder')}
                  value={inputs.lifeGoals}
                  onChange={(e) => handleInputChange('lifeGoals', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="riskTolerance">{t('calculator.riskTolerance')}</Label>
                <Select value={inputs.riskTolerance} onValueChange={(value: string) => handleInputChange('riskTolerance', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">{t('calculator.conservative')}</SelectItem>
                    <SelectItem value="moderate">{t('calculator.moderate')}</SelectItem>
                    <SelectItem value="aggressive">{t('calculator.aggressive')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={calculateCoverage} 
                  className="flex-1 bg-licBlue hover:bg-licBlue/90"
                  disabled={isCalculating || !inputs.age || !inputs.monthlyIncome}
                >
                  {isCalculating ? t('calculator.calculating') : t('calculator.calculate')}
                </Button>
                <Button 
                  onClick={resetCalculator} 
                  variant="outline"
                  className="px-6"
                >
                  {t('calculator.reset')}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-licGold" />
                {t('calculator.resultsTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result ? (
                <div className="space-y-6">
                  {/* Main Recommendation */}
                  <div className="text-center p-6 bg-gradient-to-r from-licBlue/10 to-licGold/10 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">{t('calculator.recommendedCoverage')}</h3>
                    <div className="text-4xl font-bold text-licBlue mb-2">
                      {formatCurrency(result.recommendedCoverage)}
                    </div>
                    <p className="text-sm text-gray-600">{t('calculator.totalCoverageNeeded')}</p>
                  </div>

                  {/* Coverage Breakdown */}
                  <div>
                    <h4 className="font-semibold mb-3">{t('calculator.coverageBreakdown')}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">{t('calculator.incomeReplacement')}</span>
                        <span className="font-medium">{formatCurrency(result.breakdown.incomeReplacement)}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">{t('calculator.debtCoverage')}</span>
                        <span className="font-medium">{formatCurrency(result.breakdown.debtCoverage)}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">{t('calculator.futureGoals')}</span>
                        <span className="font-medium">{formatCurrency(result.breakdown.futureGoals)}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                        <span className="text-sm">{t('calculator.emergencyFund')}</span>
                        <span className="font-medium">{formatCurrency(result.breakdown.emergencyFund)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Plan Recommendations */}
                  <div>
                    <h4 className="font-semibold mb-3">{t('calculator.planRecommendations')}</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-licBlue" />
                          <span className="text-sm font-medium">{t('calculator.termPlan')}</span>
                        </div>
                        <span className="font-semibold text-licBlue">{formatCurrency(result.termPlan)}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-2">
                          <Home className="h-4 w-4 text-licGold" />
                          <span className="text-sm font-medium">{t('calculator.endowmentPlan')}</span>
                        </div>
                        <span className="font-semibold text-licGold">{formatCurrency(result.endowmentPlan)}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium">{t('calculator.ulipPlan')}</span>
                        </div>
                        <span className="font-semibold text-green-600">{formatCurrency(result.ulipPlan)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center pt-4 border-t space-y-3">
                    <p className="text-sm text-gray-600 mb-3">{t('calculator.consultationText')}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button 
                        className="bg-licGold hover:bg-licGold/90 text-white"
                        onClick={() => {
                          const element = document.getElementById('contact');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {t('calculator.getConsultation')}
                      </Button>
                      <Button 
                        className="bg-licBlue hover:bg-licBlue/90 text-white"
                        onClick={() => window.open('https://ebiz.licindia.in/', '_blank')}
                      >
                        {t('calculator.licOfficialCalculator')}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">{t('calculator.fillForm')}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong>{t('calculator.disclaimer')}:</strong> {t('calculator.disclaimerText')}
          </p>
        </div>
      </div>
    </section>
  );
}
